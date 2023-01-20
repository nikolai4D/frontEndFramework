export function Router(routes) {  // Named proto instead of using default name because ref to it needed below to add methods to it.

    this.routes = routes
    this.currentView= null

    this.setBrowserHistory()
}

export function route(path, view) {
    return {
        path,
        view
    };
}

Router.prototype.setBrowserHistory = function() {
    window.addEventListener('popstate', async (event) => {
        if(event){
            await this.goTo(window.location.pathname.slice(1), undefined, false,false)
        }
    })
}

Router.prototype.goTo = async function(fullRoute, params = [], forceNewView = false, pushState = true) {
    console.log("goTo", fullRoute, params)

    const splitRoute = fullRoute.split("/")
    const routeBase = splitRoute[0]
    const routeParams = splitRoute.slice(1).filter((e) => e !== "")

    let previousView = this.currentView;

    console.log("routeBase", routeBase)

    let route = this.routes.find( r => r.path === routeBase )

    if (!route) {
        route = this.routes[0]
        fullRoute = this.routes[0].path
        console.warn(`View ${routeBase} not found, using default view`)
    }


    const createView = async (viewConstructor, params = [])=> {
        let view = await new viewConstructor(routeParams, ...params)
        view.path = fullRoute
        return view
    }


    async function switchView(currentView) {
        if(previousView) await previousView.template.removeElement()

        if(pushState) history.pushState({path: routeBase}, null, "../" + fullRoute) //History only store the route of the view
        await currentView.setView()
    }

    this.currentView = await createView(route.view, params)
    await switchView(this.currentView)

}

