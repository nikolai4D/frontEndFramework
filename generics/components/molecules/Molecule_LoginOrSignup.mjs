import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Molecule_LoginOrSignup() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c4r1 molecule_login-or-signup">
                <div class="grid-placement__c2-3r1 center">
                </div>
            </div>
        `
    }

    this.bindScript= function() {
    }

}