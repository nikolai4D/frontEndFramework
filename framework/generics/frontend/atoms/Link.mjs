import {Component} from "../../../core/Component.mjs";

export function Link(text, route, router){
    Component.call(this)

    this.getHTML = function(){
        return `<a>${text}</a>`
    }

    this.bindScript = function(){
        this.element.addEventListener("click", ()=> router.goTo(route))
    }
}