import {Component} from "../../../core/Component.mjs";

export function Atom_Checkbox(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <input type="checkbox" class="atom_checkbox" checked/>
                `
    }

    this.bindScript= function() {
        this.element.addEventListener("click", model.onClick)
    }

}
