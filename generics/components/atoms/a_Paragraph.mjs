import {Component} from "../../../core/Component.mjs";

export function a_Paragraph() {
    Component.call(this)

    this.options = {
        text: "A_Paragraph",
    }

    this.getHtml = function() {
        return `<p>${this.options.text}</p>`
    }
}