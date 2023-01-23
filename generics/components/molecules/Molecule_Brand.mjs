import {Component} from "../../../core/Component.mjs";
import {Icon} from "../atoms/Icon.mjs";
import {slot} from "../../../core/helpers.mjs";


export function Molecule_Brand(data ){
    Component.call(this)

    let icon = new Icon(data.icon)

    this.getHtml = function() {
        return `
            <div class="molecule_brand">
                ${slot("icon")}
                <span>${data.name}</span>
            </div>
        `
    }

    this.bindScript = function() {
        this.fillSlot("icon", icon.getElement())
        this.getElement().addEventListener("click", data.onClick)
    }

}