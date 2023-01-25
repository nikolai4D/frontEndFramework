import {Component} from "../../../core/Component.mjs";
import { State } from "../../../core/actions/State.mjs";

export function t_LoggedIn() {
    Component.call(this)

    this.options = {
        subComponents: {
            organism_startInfo : null,
            organism_loginOrSignup: null
        }
    }

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start">
                <div class="grid-placement__c1r1-3">
                    ${this.slot(this.subComponents.organism_startInfo)}
                </div>
                <div class="grid-placement__c2-3r2">
                    ${this.slot(this.subComponents.organism_loginOrSignup)}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let model = State.views[view].components
    };
}