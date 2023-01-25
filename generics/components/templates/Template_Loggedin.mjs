import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { State } from "../../../core/actions/State.mjs";

export function Template_Loggedin() {
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
                    ${slot(this.options.subComponents.organism_startInfo)}
                </div>
                <div class="grid-placement__c2-3r2">
                    ${slot(this.options.subComponents.organism_loginOrSignup)}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let model = State.views[view].components
    };
}