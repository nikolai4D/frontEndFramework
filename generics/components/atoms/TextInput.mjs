import {Component} from "../../../core/Component.mjs";


export default function(data) {
    Component.call(this)
    const {type, placeholder} = data

    this.getHtml = function() {
        return `
        <input type="${type}" placeholder="${placeholder}">
        `
    }

}