import {stringToHTMLElement} from "./helpers.mjs";

export const _component = {

    /**
     * a reference to the main DOM element of this component. Preferably, use getElement() instead.
     */
    element: null,


    /**
     * Make sure the returned string have only one component at the top level
     * @returns <string>
     */
     getHTML: function() { return `
        <div>
            <h1>default component content</h1>
        </div>
        `
     },


    /**
     * Add js to the component
     * @returns <void>
     */
    bindScript: function(){

    },


    /**
     * Get the DOM element of the component. Init the element if it is not already done.
     * @returns <Element>
     */
    getElement: function(){
        if(!this.element) {
            this.element = stringToHTMLElement(this.getHTML())
            this.bindScript()
        }
        return this.element
    },


    /**
     * Remove the element from the DOM. Can be overridden to do other things.
     * @returns <void>
     */
    removeElement: function() {
        if(this.element) this.element.remove()
    },


    getState: function(state) {
        return null
    },

    setState: function(state) {
        // do something
    },


    /**
     * Replace the designated slot with the given element
     * @param slotName {String}
     * @param element {HTMLElement}
     */
    fillSlot: function(slotName, element) {
        const slot = this.getElement().querySelector(`[data-slot="${slotName.toString()}"]`)
        if(!slot) throw new Error(`Slot ${slotName} not found`)
        slot.replaceWith(element)
    },


    /**
     * Replace the designated slots with the given elements
     * @param slotMap {Map<String,HTMLElement>}
     */
    fillSlots: function (slotMap) {
        for(let [slotName, element] of slotMap){ this.fillSlot(slotName, element) }
    }
}

