import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Organism_LoginForm } from "../organisms/Organism_LoginForm.mjs";

import { Organism_StartInfo } from "../organisms/Organism_StartInfo.mjs";
import { State } from "../../../core/actions/State.mjs";

export function Template_Login_View(view) {
    Component.call(this)

    this.props = {
        organism_loginForm: new Organism_LoginForm().props
    }

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start">
   
                <div class="grid-placement__c2-3r2">
                    ${slot("organismLoginForm")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let model = State.views[view].components
        // let organismStartInfo = new Organism_StartInfo(model.organism_startInfo);
        let organismLoginForm = new Organism_LoginForm(model.organism_loginForm);

        // this.fillSlot("organismStartInfo", organismStartInfo.getElement());
        this.fillSlot("organismLoginForm", organismLoginForm.getElement());
    };

}

{/* <div class="grid-placement__c1r1-3">
${slot("organismStartInfo")}
</div> */}