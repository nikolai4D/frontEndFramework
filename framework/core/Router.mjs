import {Login} from "../../example/javascript/frontend/views/Login.mjs";

export function Router(viewConstructors) {  // Named proto instead of using default name because ref to it needed below to add methods to it.

    this.viewConstructors = viewConstructors
    this.viewStates= new Map()
    this.currentView= null


    this.setBrowserHistory= ()=> {
        window.addEventListener('popstate', async (event) => {
            if(event.state){
                await this.goTo(event.state.route, undefined, false,false)
            }
        })
    }

    this.setBrowserHistory()
}


Router.prototype.goTo = async function(routeName, params = [], forceNewView = false, pushState = true) {
    console.log("goTo", routeName, params)

    let previousView = this.currentView;

    let foundState = this.viewStates.get(routeName)
    if(foundState && !forceNewView){ this.viewStates.delete(routeName)}

    let viewConstructor = this.viewConstructors.find(view => view.route === routeName)
    if (!viewConstructor) {
        viewConstructor = this.viewConstructors[0]
        console.warn(`View ${routeName} not found, using default view`)
    }



    const createView = async (viewConstructor, params = [], state = null)=> {
        // let view = await new viewConstructor(...params)
        let view = new Login()
        if(state) await view.setState(state)
        return view
    }
    

    async function switchView(currentView, viewStates) {
        if(previousView) {
            viewStates.set(previousView.route, previousView.getState()) // Store the previous view state in the views map
            await previousView?.unsetView()
        }

        if(pushState) history.pushState({route: viewConstructor.route}, viewConstructor.route, viewConstructor.route) //History only store the route of the view
        await currentView.setView()
        console.log("view set: " + viewConstructor.name)
    }

    
    if(viewConstructor.constructor.guard) {
        let answer = await viewConstructor.guard.awaitAnswer(routeName, params)
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

