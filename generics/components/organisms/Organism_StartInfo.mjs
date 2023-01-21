import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { Molecule_HeaderAndText } from "../molecules/Molecule_HeaderAndText.mjs";

export function Organism_StartInfo() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c1r7 organism_start-info">
                <div class="grid-placement__c1r1">
                    ${slot("logo")}
                </div>
                <div class="grid-placement__c1r3">
                    ${slot("headerAndText")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let logo = new Molecule_Logo()
        let headerAndText = new Molecule_HeaderAndText()
        this.fillSlot("logo", logo.getElement());
        this.fillSlot("headerAndText", headerAndText.getElement());
    }

}