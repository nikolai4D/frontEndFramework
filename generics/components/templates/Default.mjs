import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Default() {
    Component.call(this)

    this.components = []

    this.getHtml = function() {
        let slots = ""
        for (let i in this.components){
            slots += slot(i)
        }

        return `
            <div>
                ${slots}
            </div>
        `
    }

    this.bindScript= function() {
        this.fillSlots(new Map(
            this.components.map((component, index) => [index, component.getElement()])
        ))
    }

}