import {Component} from "../../../core/Component.mjs";

export function O_SignupForm(model) {
    Component.call(this)

    this.subComponents = {
        signupForm: null,
    }

    this.getHtml = function() {

        return `
            <div class="grid__c4r1 organism_signupForm">
                <div class="grid-placement__c2-3r1 center">
                    ${this.slot(this.subComponents.signupForm)}
                </div>
            </div>
        `
    }

}