import {Component} from "../../../core/Component.mjs";

export function a_Button() {
    Component.call(this)

    this.options = {
        text: "",
        onClick: ()=> {console.log("click")}
    }

    this.getHtml= function() {
        return `
        <button type="button"  class="btn btn-primary">${this.options.text}</button>`
    }

    this.bindScript= function() {
        this.element.addEventListener("click", ()=> {this.options.onClick()})
    }

}