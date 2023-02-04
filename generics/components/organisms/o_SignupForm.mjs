import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {M_SignupForm} from "../molecules/m_SignupForm.mjs";

export function O_SignupForm(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c4r1 organism_signupForm">
                <div class="grid-placement__c2-3r1 center">
                    ${slot("signupForm")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let signupForm = new M_SignupForm(model.molecule_signupForm)
        this.fillSlot("signupForm", signupForm.getElement());
    }
}