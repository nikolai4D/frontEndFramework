import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Organism_LoginOrSignup() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c4r1">
                <div class="grid-placement__c2-3r1 center">
                    Molecule_LoginOrSignup
                </div>
            </div>
        `
    }

    this.bindScript= function() {

    }

}