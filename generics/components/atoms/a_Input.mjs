import {Component} from "nd_frontend/core/Component.mjs";

export function a_Input(model = {}) {
    const {type="text", placeholder="..."} = model
    this.options = {
        type: type,
        placeholder: placeholder,
    }
    Component.call(this)
    


    this.getHtml = function() {
        return `
        <input class="atom_input" type="${this.options.type}" placeholder="${this.options.placeholder}">
        `
    }



}

