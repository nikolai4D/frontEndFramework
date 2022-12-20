export function View() {

    // As it is a constructor, View itself cannot be async, Async functions needed for a view should be wrapped into methods (like the setView method below).

    this.title= "default title"
    this.template= null

    // The params are passed to the constructor when the view is created
    this.routeParams = null // The rest of the provided route (example: /login/1/2/3 would be [1,2,3])
    this.params  = null // The params passed to the view constructor. Useful to send non-serializable objects to the view.


    /**
     * Called by setView, usefull to load async data. Do nothing by default.
     * @returns {Promise<void>}
     */
    this.loadData = async function() {

    }
    
    /**
     * Called by router. In most cases, should not be overridden.
     * @returns {Promise<void>}
     */
    this.setView= async function() {
        await this.loadData()

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

    this.setState= async function(state) {
        return {}
    }

}