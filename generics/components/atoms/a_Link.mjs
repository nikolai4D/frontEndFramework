import {Component} from "../../../core/Component.mjs";

export function a_Link(data){
    Component.call(this)

    this.options = {
        class: "A_Paragraph",
        text: "A_Paragraph",
        router: null,
        route: null,
    }

    this.getHtml = function(){
        return `<a  class="${this.options.class}">${this.options.text}</a>`
    }

    this.bindScript = function(){
        this.element.addEventListener("click", ()=> this.options.router.goTo(this.options.route))
    }
}