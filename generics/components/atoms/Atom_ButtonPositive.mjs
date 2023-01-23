import {Component} from "../../../core/Component.mjs";

export function Atom_ButtonPositive(model) {
    Component.call(this)
    const {text, onClick}=model
    
    this.props = {
        text: text,
        onClick: onClick
    }

    this.getHtml = function() {

        return `
                <button class="atom_button-positive">${this.props.text}</button>
                `
    }

    this.bindScript= function() {
        this.element.addEventListener("click", this.props.onClick)
    }

}

