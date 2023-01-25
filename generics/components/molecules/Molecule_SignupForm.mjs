import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { a_ButtonPositive } from "../atoms/A_ButtonPositive.mjs";
import { Atom_Text1 } from "../atoms/Atom_Text1.mjs";
import { a_ButtonNeutral } from "../atoms/A_ButtonNeutral.mjs";
import { Atom_Input } from "../atoms/Atom_Input.mjs";

export function Molecule_SignupForm(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_signup-form">
            ${slot("input")}
            ${slot("button-neutral")}
            </div>
        `
    }

    this.bindScript= function() {
        let input = new Atom_Input(model.atom_input)
        let buttonNeutral = new a_ButtonNeutral(model.atom_buttonNeutral)
        this.fillSlot("input", input.getElement())
        this.fillSlot("button-neutral", buttonNeutral.getElement());
    }

}