import {Component} from "../../../core/Component.mjs";

export function Link(data){
    Component.call(this)

    this.getHtml = function(){
        return `<a  class="${data.class}">${data.text}</a>`
    }

    this.bindScript = function(){
        this.element.addEventListener("click", ()=> data.router.goTo(data.route))
    }
}