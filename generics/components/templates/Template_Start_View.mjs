import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Organism_LoginOrSignup } from "../organisms/Organism_LoginOrSignup.mjs";
import { Organism_StartInfo } from "../organisms/Organism_StartInfo.mjs";
import { State } from "../../../core/actions/State.mjs";

export function Template_Start_View(view) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid grid__c2">
                    ${slot("organismStartInfo")}
                    ${slot("organismLoginOrSignup")}
            </div>
        `
    }

    this.bindScript= function() {
        let model = State.views[view].components
        let organismStartInfo = new Organism_StartInfo(model.organism_startInfo);
        let organismLoginOrSignup = new Organism_LoginOrSignup(model.organism_loginOrSignup);

        this.fillSlot("organismStartInfo", organismStartInfo.getElement());
        this.fillSlot("organismLoginOrSignup", organismLoginOrSignup.getElement());
    };
}