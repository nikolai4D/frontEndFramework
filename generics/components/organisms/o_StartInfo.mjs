import {Component} from "../../../core/Component.mjs";

export function o_StartInfo(model) {
    Component.call(this)

    this.subComponents = {
        top: null,
        central: null,
    }

    this.getHtml = function() {

        return `
            <div class="grid__c1r7 organism_start-info">
                ${this.slot(this.subComponents.top)}
                ${this.slot(this.subComponents.central)}
            </div>
        `
    }


}