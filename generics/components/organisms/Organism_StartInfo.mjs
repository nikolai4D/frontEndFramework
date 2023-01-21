import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Organism_StartInfo() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c1r7 organism_start-info">
                <div class="grid-placement__c1r1">
                    Molecule_Logo
                </div>
                <div class="grid-placement__c1r3">
                    Molecule_HeaderAndText
                </div>
            </div>
        `
    }

    this.bindScript= function() {
  
    }

}