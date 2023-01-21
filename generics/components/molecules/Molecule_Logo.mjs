import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Molecule_Logo() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c1r7 molecule_logo">
                <div class="grid-placement__c1r1">
                </div>
            </div>
        `
    }

    this.bindScript= function() {
  
    }

}