import {Component} from "nd_frontend/core/Component.mjs";

export function a_Input(model = {}) {
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

