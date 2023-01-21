import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function TemplateLogin() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div>
                TemplateLogin
            </div>
        `
    }

    this.bindScript= function() {

    }

}