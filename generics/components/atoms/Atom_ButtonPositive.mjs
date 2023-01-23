import {Component} from "../../../core/Component.mjs";

export function Atom_ButtonPositive(model) {
    Component.call(this)
    const {text, onClick}=model
    

    this.getHtml = function() {

        return `
                <button class="atom_button-positive">${model.text}</button>
                `
    }

    this.bindScript= function() {
        this.element.addEventListener("click", model.onClick)
    }
    // this.props = {
    //     text: text,
    //     onClick: onClick
    // }

}
