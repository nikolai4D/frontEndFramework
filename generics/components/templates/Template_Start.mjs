import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Organism_LoginOrSignup } from "../organisms/Organism_LoginOrSignup.mjs";
import { Organism_StartInfo } from "../organisms/Organism_StartInfo.mjs";

export function Template_Start(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start">
                <div class="grid-placement__c1r1-3">
                    ${slot("organismStartInfo")}
                </div>
                <div class="grid-placement__c2-3r2">
                    ${slot("organismLoginOrSignup")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let organismStartInfo = new Organism_StartInfo(model.organism_start_info);
        let organismLoginOrSignup = new Organism_LoginOrSignup(model.organism_loginOrSignup);

        this.fillSlot("organismStartInfo", organismStartInfo.getElement());
        this.fillSlot("organismLoginOrSignup", organismLoginOrSignup.getElement());
    };
}