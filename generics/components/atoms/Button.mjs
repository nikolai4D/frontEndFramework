import {Component} from "../../../core/Component.mjs";

export function Button(data) {
    Component.call(this)
    const {text, onClick} = data

    this.getHtml= function() {
        return `
        <button type="button"  class="btn btn-primary molecule_card_btn">${text}</button>`
    }

    this.bindScript= function() {
        this.element.addEventListener("click", this.onClick)
    }

    this.onClick = onClick
}