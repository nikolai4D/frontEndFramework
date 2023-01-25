import {Component} from "../../../core/Component.mjs";

export function o_StartInfo(model) {
    Component.call(this)

    this.getHtml = function() {

        this.options = {
            top: null,
            central: null,
        }

        return `
            <div class="grid__c1r7 organism_start-info">
                <div class="grid-placement__c1r1">
                    ${this.slot(this.subComponents.top)}
                </div>
                <div class="grid-placement__c1r3">
                    ${this.slot(this.subComponents.central)}
                </div>
            </div>
        `
    }


}