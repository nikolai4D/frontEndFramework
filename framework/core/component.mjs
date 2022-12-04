import {stringToHTMLElement} from "./helpers.mjs";

export const _component = {

    /**
     * a reference to the main DOM element of this component. Preferably, use getElement() instead.
     */
    element: null,


    /**
     * Make sure the returned string have only one component at the top level
     * @returns {Promise<string>}
     */
     getTemplate: async function() { return `
        <div>
            <h1>default component content</h1>
        </div>
        `
     },

    /**
     * Get the DOM element of the component. Init the element if it is not already done.
     * In most cases, override initElement() instead of this method.
     * @returns {Promise<Element>}
     */
    getElement: async function(){
        if(!this.element) {
            this.element = stringToHTMLElement(await this.getTemplate())
            await this.bindScript()
        }
        return this.element
    },


    /**
     * Init the element by converting html to DOM Element. Can be overridden to do other things, like add event listeners.
     * @returns {Promise<void>}
     */
    bindScript: async function(){

    },


    /**
     * Remove the element from the DOM. Can be overridden to do other things.
     * @returns {Promise<void>}
     */
    removeElement: function() {
        if(this.element) this.element.remove()
    },


    getState: function(state) {
        return {}
    },

    setState: function(state) {
        // do something
    },


    /**
     * Inside this element, replace an element marked by a data-slot value by another element.
     * @param slotName {String}
     * @param element {HTMLElement}
     */
    fillSlot: async function(slotName, element) {
        return (await this.getElement()).querySelector(`[data-slot="${slotName.toString()}"]`).replaceWith(element)
    },


    /**
     *
     * @param slotMap {Map<String,HTMLElement>}
     */
    fillSlots: async function (slotMap) {
        let promises = []

        for(let [slotName, element] of slotMap){ promises.push(this.fillSlot(slotName, element)) }

        await Promise.all(promises)
    }
}

