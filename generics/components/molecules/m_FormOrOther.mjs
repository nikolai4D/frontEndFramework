import {Component} from "../../../core/Component.mjs";

export function m_FormOrOther() {
    Component.call(this)

    this.subComponents = {
        top_button: null,
        text: null,
        bottom_button: null
    }

    this.getHtml = function() {

        return `
            <div class="molecule_login-or-signup">
            ${this.slot(this.subComponents.top_button)}
            ${this.slot(this.subComponents.text)}
            ${this.slot(this.subComponents.bottom_button)}
            </div>
        `
    }
}