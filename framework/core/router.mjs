export function Router(routes) {
    let newRouter = Object.assign({}, _router)
    newRouter.routes = routes
    newRouter.setBrowserHistory()
    return newRouter
}


export const _router = {

    routes: [],
    viewStates: new Map(),
    currentView: null,

    goTo: async function(routeName, params = [], forceNewView = false, pushState = true) {
        console.log("goTo", routeName, params)

        let previousView = this.currentView;

        let foundState = this.viewStates.get(routeName)
        if(foundState && !forceNewView){ this.viewStates.delete(routeName)}

        console.log("routes: ", this.routes)
        let route = this.routes.find(route => route.name === routeName)
        if (!route) {
            route = this.routes[0]
            console.warn(`View ${routeName} not found, using default view`)

        }



        const createView = async (viewFactory, params = [], state = null)=> {
            let view = await viewFactory(...params)
            if(state) await view.setState(state)
            return view
        }



        async function switchView(currentView, viewStates) {
            if(previousView) {
                viewStates.set(previousView.route, previousView.getState()) // Store the previous view state in the views map
                await previousView?.unsetView()
            }

            if(pushState) history.pushState({route: route.name}, route.name, route.name) //History only store the route of the view
            await currentView.setView()
            console.log("view set: " + route.name)
        }



        if(route.guard) {
            let answer = await route.guard.awaitAnswer(routeName, params)
            switch (answer) {
                case "allow":
                    console.log("allow")
                    this.currentView = await createView(route.view, params, foundState)
                    await switchView(this.currentView, this.viewStates)
                    break;
                case "redirect":
                    console.log("redirecting to " + route.redirect)
                    await this.goTo(this.currentView.redirect ?? this.routes[0].name, params, forceNewView, pushState)
                    break;
                case "stop":
                    console.log("guard stopped")
                    break;
                default:
                    console.error("guard answer not recognized: " + answer)
            }
        }
        else  {
            console.log("route: " + JSON.stringify(route, null, 2))
            this.currentView = await createView(route.view, params, foundState)
            await switchView(this.currentView, this.viewStates)
        }
    },

    setBrowserHistory: ()=> {
        window.addEventListener('popstate', async (event) => {
            if(event.state){
                await this.goTo(event.state.route, undefined, false,false)
            }
        })
    }

}

