
//Define static properties above the prototype constructor so they can be accessed before the constructor is called
View.route= "defaultRoute"
View.guard= null

export function View() {

    // Guard and route should be defined as a static property as follows:
    // View.guard = guardConstructor
    // View.route = "route"

    // As it is a constructor, View itself cannot be async, Async functions needed for a view should be wrapped into methods (like the setView method below).

    this.title= "default title"
    this.template= null

    /**
     * Called by router. In most cases, should not be overridden.
     * @returns {Promise<void>}
     */
    this.setView= async function() {
        if(!this.template) throw new Error("View template is not set")
        document.body.append(this.template.getElement())

        document.title = this.title
    }

    this.unsetView= async function() {
        await this.template.removeElement()
    }

    this.getState= function(state) {
        return {}
    }

}