import {Component} from "../../../core/Component.mjs";

export function a_ButtonPositive(model = {}) {
    const {text = "", onClick = ()=> {console.log}}= model
    this.props = {
        text,
        onClick
    }

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
