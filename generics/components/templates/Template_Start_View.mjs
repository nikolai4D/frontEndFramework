import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Organism_LoginOrSignup } from "../organisms/Organism_LoginOrSignup.mjs";
import { Organism_StartInfo } from "../organisms/Organism_StartInfo.mjs";
import { State } from "../../../core/actions/State.mjs";

export function Template_Start_View(view) {
    Component.call(this)
    this.model = State.views[view].components

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start">
                <div class="grid-placement__c1r1-3">
                    ${slot("organism_startInfo")}
                </div>
                <div class="grid-placement__c2-3r2">
                    ${slot("organismLoginOrSignup")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        this.treeCreateComponents()
        //let model = State.views[view].components
        //let organismStartInfo = new Organism_StartInfo(model.organism_startInfo);
        //let organismLoginOrSignup = new Organism_LoginOrSignup(model.organism_loginOrSignup);

        this.fillSlot("organism_startInfo", this.subComponents.organism_startInfo.getElement());
        this.fillSlot("organismLoginOrSignup", this.subComponents.organism_loginOrSignup.getElement());
    };
}