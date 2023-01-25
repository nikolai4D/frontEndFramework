import {stringToHTMLElement} from "./helpers.mjs";

export function Component(){

    /**
     * a reference to the main DOM element of this component. Preferably, use getElement() instead.
     */
    this.element= null

    this.subComponents = {}

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
     * Add js to the component
     * @returns <void>
     */
    this.bindScript= function(){

    }

    /**
     * Get the DOM element of the component. Init the element if it is not already done.
     * param <boolean> forceInit if true, the element will be reinitialized
     * @returns <Element>
     */
    this.getElement = function(forceInit = false){

        if(!this.element || forceInit){
            this.element = stringToHTMLElement(this.getHtml())
            this.bindSlots()
            this.bindScript()
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

    this.slot = function(component) {
        let key
        try {
            key = Object.keys(this.subComponents).find(key => this.subComponents[key] === component)
        } catch (e) {
            console.error("Error while finding key for component: ", component, "while trying to fill slot")
            console.error("key: ", key)
            console.error("subComponents keys: ", Object.keys(this.subComponents))
        }
        return `<div data-slot="${key}" class="slot"></div>`
    }

    this.bindSlots = function(){
        let slots = this.element.querySelectorAll("[data-slot]")
        slots.forEach(slot => {
            let key = slot.dataset.slot
            slot.replaceWith(this.subComponents[key].getElement())
        })
    }

}

