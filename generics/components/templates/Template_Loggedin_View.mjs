import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { State } from "../../../core/actions/State.mjs";
import { Molecule_HeaderAndText } from "../molecules/Molecule_HeaderAndText.mjs" 
import { NavBar } from "nd_frontend/generics/components/organisms/NavBar.mjs";

export function Template_Loggedin_View(view) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid grid__c3r3 template_start">
            ${slot("navbar")}
                <div class="grid-placement__c2-3r2">
                    ${slot("loggedInHeaderAndText")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let model = State.views[view].components
        let molecule_headerAndText= new Molecule_HeaderAndText(model.molecule_headerAndText)
        let organism_navbar = new NavBar(model.organism_navbar)

        this.fillSlot("loggedInHeaderAndText", molecule_headerAndText.getElement());
        this.fillSlot("navbar", organism_navbar.getElement());
    };
}