import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Molecule_HeaderAndText() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c1r7 molecule_header-and-text">
                <div class="grid-placement__c1r1">
                </div>
            </div>
        `
    }

    this.bindScript= function() {
  
    }

}