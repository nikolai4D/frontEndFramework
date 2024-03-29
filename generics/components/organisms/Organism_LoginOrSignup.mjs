import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Molecule_LoginOrSignup} from "../molecules/Molecule_LoginOrSignup.mjs";

export function Organism_LoginOrSignup(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c4r1 organism_login-or-signup">
                <div class="grid-placement__c2-3r1 center">
                    ${slot("loginOrSignup")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let loginOrSignup = new Molecule_LoginOrSignup(model.molecule_loginOrSignup)
        this.fillSlot("loginOrSignup", loginOrSignup.getElement());
    }
}