import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {M_LoginForm} from "../molecules/m_LoginForm.mjs";

export function Organism_LoginForm(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c4r1 organism_loginForm">
                <div class="grid-placement__c2-3r1 center">
                    ${slot("loginForm")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let loginForm = new M_LoginForm(model.molecule_loginForm)
        this.fillSlot("loginForm", loginForm.getElement());
    }
}