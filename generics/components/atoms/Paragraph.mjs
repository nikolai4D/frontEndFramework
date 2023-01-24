import {Component} from "../../../core/Component.mjs";

export function Paragraph(model) {
    Component.call(this)

    this.getHtml = function() {
        return `<p>${model.text}</p>`
    }
}