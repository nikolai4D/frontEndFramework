import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_ButtonBasic  } from "../atoms/Atom_ButtonBasic.mjs";
import {Atom_Input} from "../atoms/Atom_Input.mjs";

export function Molecule_InputAndButton(model) {
    Component.call(this)

    this.props = {
        atom_input: new Atom_Input().props,
        atom_buttonBasic: new Atom_ButtonBasic().props
    }

    console.log( this.props, "Molecule_InputAndButton")

    this.getHtml = function() {

        return `
            <div class="molecule_input_and_button">
                ${slot("input")}
                ${slot("button")}
            </div>
        `
    }

    this.bindScript= function() {
        let atomInput = new Atom_Input(model.atom_input)
        let button = new Atom_ButtonBasic(model.atom_buttonBasic)
        this.fillSlot("input", atomInput.getElement());
        this.fillSlot("button", button.getElement());
    }
}