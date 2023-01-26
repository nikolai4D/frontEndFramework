import {createComponentsFromModel} from "../generics/models/Model.mjs";

/**
 *
 * @constructor
 */
export function View() {

    // As it is a constructor, View itself cannot be async, Async functions needed for a view should be wrapped into methods (like the setView method below).

    this.title= "default title"
    this.template= null
    this.model= null

    /**
     * Called by router. In most cases, should not be overridden.
     * @returns {Promise<void>}
     */
    this.setView= async function() {

        if(!this.model) throw new Error("View model is not set")
        this.template = createComponentsFromModel(this.model)

        if(!this.template) throw new Error("View template is not set")
        document.body.append(this.template.getElement())

        document.title = this.title
    }

}