import {Component} from "../../../core/Component.mjs";

export function Atom_ButtonWhite(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <button class="atom_button-white">${model.text}</button>
                `
    }

    this.bindScript= function() {
        this.element.addEventListener("click", model.onClick)
    }


}