import {Component} from "../../../core/Component.mjs";
// import { router } from "../../../../UrbanCloud-alt1/src/javascript/index.mjs";

export function Link(model){
    Component.call(this)

    this.getHtml = function(){
        return `<a  class="${model.class}">${model.text}</a>`
    }

    this.bindScript = function(){
        this.element.addEventListener("click", model.onClick)
    }
}