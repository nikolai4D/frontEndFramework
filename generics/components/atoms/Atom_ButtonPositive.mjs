import {Component} from "../../../core/Component.mjs";

export function Atom_ButtonPositive(model = {}) {
    const {text = "", onClick = ()=> {console.log}}= model

    Component.call(this)

    this.getHtml = function() {

        return `
                <button class="atom_button-positive">${text}</button>
                `
    }

    this.bindScript= function() {
        this.element.addEventListener("click", onClick)
    }
}
