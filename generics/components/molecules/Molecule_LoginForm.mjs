import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";
import { Atom_Input } from "../atoms/Atom_Input.mjs";

export function Molecule_LoginForm(model) {
    Component.call(this)

    this.props = {
        atom_input: new Atom_Input().props,
        atom_buttonPositive: new Atom_ButtonPositive().props
    }

    console.log( this.props, "Molecule_LoginForm")

    this.getHtml = function() {

        return `
            <div class="molecule_login-form">
                ${slot("input")}
                <div>
                    ${slot("button-positive")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let input = new Atom_Input(model.atom_input)
        let buttonPositive = new Atom_ButtonPositive(model.atom_buttonPositive)
        this.fillSlot("input", input.getElement());
        this.fillSlot("button-positive", buttonPositive.getElement());
    }


  
}