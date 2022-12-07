import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";


export default function(centralElement) {
    Component.call(this)

    this.getHTML= function() {
        return `
        <div>
            ${slot("central")}
        </div>
        `
    }

    this.bindScript= function() {
        this.fillSlot("central", centralElement.getElement())
    }

}