import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function TemplateLoggedin() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div>
                TemplateLoggedin
            </div>
        `
    }

    this.bindScript= function() {

    }

}