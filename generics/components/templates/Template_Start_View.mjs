import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Organism_LoginOrSignup } from "../organisms/Organism_LoginOrSignup.mjs";
import { Organism_StartInfo } from "../organisms/Organism_StartInfo.mjs";
import { State } from "../../../core/actions/State.mjs";

export function Template_Start_View(view) {
    Component.call(this)
    const {component} = State[view];

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start_view">
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
        let organismStartInfo = new Organism_StartInfo(State);
        let organismLoginOrSignup = new Organism_LoginOrSignup();

        this.fillSlot("organismStartInfo", organismStartInfo.getElement());
        this.fillSlot("organismLoginOrSignup", organismLoginOrSignup.getElement());
    };
}