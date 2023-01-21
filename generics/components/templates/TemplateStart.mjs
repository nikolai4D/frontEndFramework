import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function TemplateStart() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3">
                <div class="grid-placement__c1r1-3">
                    org_startInfo
                </div>
                <div class="grid-placement__c2-3r2">
                    org_loginOrSignup
                </div>
            </div>
        `
    }

    this.bindScript= function() {

    }

}