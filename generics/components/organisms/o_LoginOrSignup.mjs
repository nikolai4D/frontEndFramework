import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {m_FormOrOther} from "../molecules/M_FormOrOther.mjs";

export function o_LoginOrSignup() {
    Component.call(this)

    this.subComponents = {

    }

    this.getHtml = function() {

        return `
            <div class="grid__c4r1 organism_login-or-signup">
                <div class="grid-placement__c2-3r1 center">
                    ${slot("loginOrSignup")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let loginOrSignup = new m_FormOrOther(model.m_loginOrSignup)
        this.fillSlot("loginOrSignup", loginOrSignup.getElement());
    }
}