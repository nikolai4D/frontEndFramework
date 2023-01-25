import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { State } from "../../../core/actions/State.mjs";

export function Template_Start(view) {
    Component.call(this)
    this.model = State.views[view].components

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start">
                <div class="grid-placement__c1r1-3">
                    ${slot("organism_startInfo")}
                </div>
                <div class="grid-placement__c2-3r2">
                    ${slot("organism_loginOrSignup")}
                </div>
            </div>
        `
    }

}