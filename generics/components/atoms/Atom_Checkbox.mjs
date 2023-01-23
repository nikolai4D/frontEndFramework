import {Component} from "../../../core/Component.mjs";

export function Atom_Checkbox(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <input class="atom_checkbox" checked="true"/>
                `
    }

    this.bindScript= function() {
        this.element.addEventListener("click", model.onClick)
    }

}