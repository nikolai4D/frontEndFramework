import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Molecule_LoginOrSignup() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_login-or-signup">
            </div>
        `
    }

    this.bindScript= function() {
    }

}