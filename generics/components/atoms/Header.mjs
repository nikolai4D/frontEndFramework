import {Component} from "../../../core/Component.mjs";

export function Header(data) {
    const {importance, text} = data
    Component.call(this)

    this.getHtml = function() {
        return `<h${importance}>${text}</h${importance}>`
    }
}