import {_component} from "./component.mjs";


// Used by the router to control access to the view and create it.
export const route = (name, view, guard) =>  {
    return {
        name,
        view,
        guard
    }
}


export function view(){
     return Object.assign({}, _component, _view)
}


export const _view = {

        title: "default title",

        getTemplate: async function() {
            return `
            <div>
                <h1>default view</h1>
                <p>Pim pam pum</p>
            </div>`
        },

        setView: async function() {

            document.body.append(await this.getElement())

            document.title = this.title
        },



        /**
         * Override the default component method to also unset the navbar
         * @returns {Promise<void>}
         */
        removeElement: async function (){
            if(this.element) this.element.remove()
        },

}