import {Component} from "../../../core/Component.mjs";

export function M_SignupForm(options) {
    Component.call(this)

    this.options = {

    }

    this.subComponents = {
        input: null,
        button: null,
    }

    this.getHtml = function() {

        return `
            <div class="molecule_signup-form">
            ${this.slot("input")}
            ${this.slot("button")}
            </div>
        `
    }


}