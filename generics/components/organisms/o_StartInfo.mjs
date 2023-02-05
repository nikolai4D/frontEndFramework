import {Component} from "../../../core/Component.mjs";
import {a_Paragraph} from "../atoms/a_Paragraph.mjs";

export function o_StartInfo(model) {
    Component.call(this)

    this.subComponents = {
        top: new a_Paragraph(),
        central: new a_Paragraph()
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