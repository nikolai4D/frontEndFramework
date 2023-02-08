import {Component} from "../../../core/Component.mjs";

export function t_Start(view) {
    Component.call(this)

    this.subComponents= {
        organism_startInfo : null,
        organism_loginOrSignup: null
    }

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start">
                <div class="grid-placement__c1r1-3">
                    ${this.slot(this.subComponents.organism_startInfo)}
                </div>
                <div class="grid-placement__c2-3r2">
                    ${this.slot(this.subComponents.organism_loginOrSignup)}
                </div>
            </div>
        `
    }

}