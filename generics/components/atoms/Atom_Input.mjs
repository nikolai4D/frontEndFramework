import {Component} from "nd_frontend/core/Component.mjs";

export function Atom_Input(model) {
    const {type="text", placeholder="..."} = model
    Component.call(this)

    this.getHtml = function() {
        return `
        <input type="${type}" placeholder="${placeholder}">
        `
    }

}