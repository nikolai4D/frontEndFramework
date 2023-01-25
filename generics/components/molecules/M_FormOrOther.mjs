import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { a_ButtonPositive } from "../atoms/A_ButtonPositive.mjs";
import { Atom_Text1 } from "../atoms/Atom_Text1.mjs";
import { a_ButtonNeutral } from "../atoms/A_ButtonNeutral.mjs";

export function m_FormOrOther() {
    Component.call(this)

    this.options = {
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