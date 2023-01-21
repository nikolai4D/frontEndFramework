import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Template_Signup() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div>
                TemplateSignup
            </div>
        `
    }

    this.bindScript= function() {

    }

}