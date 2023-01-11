import { APP_STYLE } from "./index.mjs";
import {Component} from "../../core/Component.mjs";

export function MockupComponent(){
    Component.call(this)

    this.getHtml = function(){
        return `
        <div>
            <h1>Mockup component content</h1>
        </div>
        `

    this.styleElement = APP_STYLE.styleMockUpComponent

}