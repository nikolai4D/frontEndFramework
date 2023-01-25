import {Component} from "../../../core/Component.mjs";

export function a_Heading() {
    Component.call(this)

    this.options = {
        text: "Heading",
        level: 1,
    }

    this.getHtml = function() {
        return `<h${this.options.level}>${this.options.text}</h${this.options.level}>`
    }
}