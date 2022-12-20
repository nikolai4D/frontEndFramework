import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";


export default function(centralComponent) {
    Component.call(this)

    this.getHtml = function() {
        return `
        <div>
            ${slot("central")}
        </div>
        `
    }

    this.bindScript= function() {
        this.fillSlot("central", centralComponent.getElement())
    }

}