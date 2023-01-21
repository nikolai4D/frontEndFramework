import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function TemplateStart() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div>
                TemplateStart
            </div>
        `
    }

    this.bindScript= function() {

    }

}