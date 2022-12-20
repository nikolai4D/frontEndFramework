import {Component} from "../../../core/Component.mjs";


export default function(type, placeholder) {
    Component.call(this)

    this.getHtml = function() {
        return `
        <input type="${type}" placeholder="${placeholder}">
        `
    }

}