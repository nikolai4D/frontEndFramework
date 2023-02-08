import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Organism_SignupForm } from "../organisms/Organism_SignupForm.mjs";
import { Organism_StartInfo } from "../organisms/Organism_StartInfo.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { State } from "../../../core/actions/State.mjs";

export function Template_Signup_View(view) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="template_signup">
                    ${slot("molecule-logo")}
                    ${slot("organism-signup")}
            </div>
        `
    }

    this.bindScript= function() {
        let model = State.views[view].components
        let moleculeLogo = new Molecule_Logo(model.molecule_logo);
        let organismSignup = new Organism_SignupForm(model.organism_signupForm);

        this.fillSlot("molecule-logo", moleculeLogo.getElement());
        this.fillSlot("organism-signup", organismSignup.getElement());
    };
}