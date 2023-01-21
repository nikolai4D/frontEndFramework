import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Template_Loggedin() {
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