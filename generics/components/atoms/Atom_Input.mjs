import {Component} from "../../../core/Component.mjs";

export function Atom_Input(model = {}) {
    const {type="text", placeholder="..."} = model
    this.props = {
        type,
        placeholder
    }
    Component.call(this)
    


    this.getHtml = function() {
        return `
        <input class="atom_input" type="${type}" placeholder="${placeholder}">
        `
    }



}

