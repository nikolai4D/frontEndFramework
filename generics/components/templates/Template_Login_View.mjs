import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Organism_LoginForm } from "../organisms/Organism_LoginForm.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { State } from "../../../core/actions/State.mjs";

export function Template_Login_View(view) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="template_login">
                ${slot("logo")}
                ${slot("organismLoginForm")}
            </div>
        `
    }

    this.bindScript= function() {
        let model = State.views[view].components
        let molecule_logo = new Molecule_Logo(model.molecule_logo);
        let organismLoginForm = new Organism_LoginForm(model.organism_loginForm);

        this.fillSlot("logo", molecule_logo.getElement());
        this.fillSlot("organismLoginForm", organismLoginForm.getElement());
    };

}