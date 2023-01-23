import {Component} from "nd_frontend/core/Component.mjs";

export function Atom_Input(model = {}) {
    const {type="text", placeholder="..."} = model

    Component.call(this)
    


    this.getHtml = function() {
        return `
        <input class="atom_input" type="${type}" placeholder="${placeholder}">
        `
    }

    // this.props = {
    //     type,
    //     placeholder
    // }

}

