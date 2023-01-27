import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Molecule_SignupForm} from "../molecules/Molecule_SignupForm.mjs";

export function Organism_SignupForm() {
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
        let signupForm = new Molecule_SignupForm()
        this.fillSlot("signupForm", signupForm.getElement());
    }
}