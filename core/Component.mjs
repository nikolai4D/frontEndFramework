import {stringToHTMLElement} from "./helpers.mjs";

export function Component(){

    /**
     * a reference to the main DOM element of this component. Preferably, use getElement() instead.
     */
    this.element= null

    /**
     * Make sure the returned string have only one component at the top level
     * @returns <string>
     */
     this.getHtml = function() { return `
        <div>
            <h1>default component content</h1>
        </div>
        `
     }


    /**
     * Add js logic to the component. Should be overwritten.
     * @returns <void>
     */
    this.bindScript= function(){}

    /**
     * Add styling to the element. Should be overwritten by one matching function in the style folder.
     */
    this.styleElement = function(){}

    /**
     * Get the DOM element of the component. Init the element if it is not already done.
     * param <boolean> forceInit if true, the element will be reinitialized
     * @returns <Element>
     */
    this.getElement = function(forceInit = false){

        if(!this.element || forceInit){
            this.element = stringToHTMLElement(this.getHtml())
            this.bindScript()
            this.styleElement()
        }

        return this.element
    }


    /**
     * Remove the element from the DOM. Can be overridden to do other things.
     * @returns <void>
     */
    this.removeElement= function() {
        if(this.element) this.element.remove()
    }

    /**
     * Replace this component s element by a new one.
     * Also replace it in the dom.
     * The new element is created in the same way as the old one, if component data
      */
    this.updateElement = function(){
        let oldElement = this.element
        this.element = this.getElement(true)
        oldElement.replaceWith(this.element)
    }

    this.getState= function(state) {
        return null
    }

    this.setState= function(state) {
        // do something
    }


    /**
     * Replace the designated slot with the given element
     * @param slotName {String}
     * @param element {HTMLElement}
     */
    this.fillSlot= function(slotName, element) {

        if(!this.element) throw new Error("Cannot fill slot before the element is defined.")

        const slot = this.element.querySelector(`[data-slot="${slotName.toString()}"]`)
        if(!slot) throw new Error(`Slot ${slotName} not found`)
        slot.replaceWith(element)
    }


    /**
     * Replace the designated slots with the given elements
     * @param slotMap {Map<String,HTMLElement>}
     */
    this.fillSlots= function (slotMap) {
        for(let [slotName, element] of slotMap){ this.fillSlot(slotName, element) }
    }


}

