import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_ButtonNeutral } from "../atoms/Atom_ButtonNeutral.mjs";
import { Atom_Input } from "../atoms/Atom_Input.mjs";

export function Molecule_SignupForm(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_signup-form">
            ${slot("input")}
            ${slot("molecule-checkbox")}
            ${slot("button-neutral")}
            </div>
        `
    }

    this.bindScript= function() {
        let input = new Atom_Input(model.atom_input)
        let molecultCheckbox =  new Atom_Input(model.atom_checkbox)
        let buttonNeutral = new Atom_ButtonNeutral(model.atom_buttonNeutral)
        this.fillSlot("input", input.getElement())
        this.fillSlot("molecule-", molecultCheckbox.getElement());
        this.fillSlot("button-neutral", buttonNeutral.getElement());
    }

}