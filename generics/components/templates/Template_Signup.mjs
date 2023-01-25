import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Organism_SignupForm } from "../organisms/Organism_SignupForm.mjs";
import { o_StartInfo } from "../organisms/o_StartInfo.mjs";
import { State } from "../../../core/actions/State.mjs";

export function Template_Signup(view) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start">
                <div class="grid-placement__c1r1-3">
                    ${slot("organismStartInfo")}
                </div>
                <div class="grid-placement__c2-3r2">
                    ${slot("organismSignup")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let model = State.views[view].components
        let organismStartInfo = new o_StartInfo(model.organism_startInfo);
        let organismSignup = new Organism_SignupForm(model.organism_signupForm);

        this.fillSlot("organismStartInfo", organismStartInfo.getElement());
        this.fillSlot("organismSignup", organismSignup.getElement());
    };
}