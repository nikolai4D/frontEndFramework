import {Login} from "../../example/javascript/frontend/views/Login.mjs";

export function Router(viewConstructors) {  // Named proto instead of using default name because ref to it needed below to add methods to it.

    this.viewConstructors = viewConstructors
    this.viewStates= new Map()
    this.currentView= null

    this.setBrowserHistory()
}

Router.prototype.setBrowserHistory = function() {
    window.addEventListener('popstate', async (event) => {
        if(event.state){
            await this.goTo(event.state.route, undefined, false,false)
        }
    })
}

Router.prototype.goTo = async function(fullRoute, params = [], forceNewView = false, pushState = true) {
    console.log("goTo", fullRoute, params)

    const routeBase = fullRoute.split("/")[0]
    const routeParams = fullRoute.split("/").filter((e) => e !== "")
    routeParams.shift()

    let previousView = this.currentView;

    let foundState = this.viewStates.get(fullRoute)
    if(foundState && !forceNewView){ this.viewStates.delete(fullRoute)}

    let viewConstructor = this.viewConstructors.find(view => view.route === routeBase)
    if (!viewConstructor) {
        viewConstructor = this.viewConstructors[0]
        console.warn(`View ${fullRoute} not found, using default view`)
    }



    const createView = async (viewConstructor, params = [], state = null)=> {
        let view = await new viewConstructor(routeParams, ...params)
        view.poum = fullRoute
        if(state) await view.setState(state)
        return view
    }
    

    async function switchView(currentView, viewStates) {
        if(previousView) {
            viewStates.set(previousView.route, previousView.getState()) // Store the previous view state in the views map
            await previousView?.unsetView()
        }

        if(pushState) history.pushState({route: currentView.poum}, currentView.route, currentView.poum) //History only store the route of the view
        await currentView.setView()
        console.log("view set: " + viewConstructor.name)
    }

    
    if(viewConstructor.constructor.guard) {
        let answer = await viewConstructor.guard.awaitAnswer(fullRoute, params)
        switch (answer) {
            case "allow":
                console.log("allow")
                this.currentView = await createView(viewConstructor.view, params, foundState)
                await switchView(this.currentView, this.viewStates)
                break;
            case "redirect":
                console.log("redirecting to " + viewConstructor.redirect)
                await this.goTo(this.currentView.redirect ?? this.viewConstructors[0].name, params, forceNewView, pushState)
                break;
            case "stop":
                console.log("guard stopped")
                break;
            default:
                console.error("guard answer not recognized: " + answer)
        }
    }
    else  {

        console.log("route: " + viewConstructor.route)

        this.currentView = await createView(viewConstructor, params, foundState)
        await switchView(this.currentView, this.viewStates)
    }
}

