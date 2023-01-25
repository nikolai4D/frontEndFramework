import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { Molecule_HeaderAndText } from "../molecules/Molecule_HeaderAndText.mjs";

export function Organism_StartInfo(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c1r7 organism_start-info">
                <div class="grid-placement__c1r1">
                    ${this.slot(this.subComponents.molecule_logo)}
                </div>
                <div class="grid-placement__c1r3">
                    ${this.slot(this.subComponents.molecule_headerAndText)}
                </div>
            </div>
        `
    }


}