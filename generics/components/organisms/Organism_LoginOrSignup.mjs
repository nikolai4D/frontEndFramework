import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Molecule_LoginOrSignup} from "../molecules/Molecule_LoginOrSignup.mjs";
import { Molecule_Card } from "../molecules/Molecule_Card.mjs";

export function Organism_LoginOrSignup(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c4r1 organism_login-or-signup">
                <div class="grid-placement__c2-3r1 center">
                    ${slot("loginOrSignup")}
                    ${slot("card")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let loginOrSignup = new Molecule_LoginOrSignup(model.molecule_loginOrSignup)
        let card = new Molecule_Card(model.molecule_card)
        this.fillSlot("loginOrSignup", loginOrSignup.getElement());
        this.fillSlot("card", card.getElement());
    }
}