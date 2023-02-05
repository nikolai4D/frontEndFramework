import {stringToHTMLElement} from "./helpers.mjs";

export function Component(options = {}){

    /**
     * a reference to the main DOM element of this component. Preferably, use getElement() instead.
     */
    this.element= null
    this.id = null
    this.constructorKey = this.constructor.name // Should be overridden to avoid unwanted behavior when minifying.
    this.subComponents = {}
    this.options = {}


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

    this.applyStyle= function(){
        if (this.options?.cssClasses) this.element.classList.add(this.options.cssClasses)
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
            this.applyStyle()

            if(this.id) this.element.id = this.id
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
            console.error("Error while finding key for component: ", component, "while trying to fill slot",
                "key: ", key,
                "subComponents keys: ", Object.keys(this.subComponents))
        }
        return `<div data-slot="${key}" class="slot"></div>`
    }

    this.bindSlots = function(){
        let slots = Array.from(this.element.querySelectorAll("[data-slot]"))


        console.log("subComponents keys: ", Object.keys(this.subComponents))
        let foundSLotsNames = slots.map(slot => slot.getAttribute("data-slot"))
        console.log("foundSLotsNames: ", foundSLotsNames)


        slots.forEach(slot => {
            let key
            try{
                key = slot.getAttribute("data-slot")
                if(this.subComponents[key]){
                    slot.replaceWith(this.subComponents[key].getElement())
                }
                else {
                    console.warn("No subComponent found for slot: " + key)
                }
            } catch (e) {
                console.error("Error while binding slot: ", key, slot,
                    "subComponents keys: ", Object.keys(this.subComponents),
                    e)
            }
        })
    }

    /**
     *
     * @param id
     * @returns {{parentComponent: Component, key: String, foundComponent: Component}}
     */
    this.findComponentDataById= function(id){

        if(this.id === id) return { parentComponent: null, key: null,  foundComponent: this}
        else {
            for (let key in this.subComponents) {
                let component = this.subComponents[key]
                if(component.id === id) return {parentComponent: this, key, foundComponent: component}
                else {
                    let result = component.findComponentDataById(id)
                    if(result && result.foundComponent) return result
                }
            }
        }

    }
}