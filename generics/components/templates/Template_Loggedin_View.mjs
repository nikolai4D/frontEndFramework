import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { State } from "../../../core/actions/State.mjs";
import { Molecule_HeaderAndText } from "../molecules/Molecule_HeaderAndText.mjs" 

export function Template_Loggedin_View(view) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start">
                <div class="grid-placement__c2-3r2">
                    ${slot("loggedInHeaderAndText")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let model = State.views[view].components
        let molecule_headerAndText= new Molecule_HeaderAndText(model.molecule_headerAndText)

        this.fillSlot("loggedInHeaderAndText", molecule_headerAndText.getElement());
    };
}