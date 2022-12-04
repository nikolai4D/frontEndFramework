// Used by the router to control access to the view and create it.
export const route = (name, view, guard) =>  {
    return {
        name,
        view,
        guard
    }
}


export const _view = {

    title: "default title",
    template: null,

    /**
     * Called by router. In most cases, should not be overridden.
     * @returns {Promise<void>}
     */
    setView: async function() {
        if(!this.template) throw new Error("View template is not set")
        document.body.append(await this.template.getElement())
        document.title = this.title
    },

}