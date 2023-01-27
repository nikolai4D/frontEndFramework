import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_ButtonNeutral } from "../atoms/Atom_ButtonNeutral.mjs";
import { Atom_Input } from "../atoms/Atom_Input.mjs";

export function Molecule_SignupForm() {
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
        let input = new Atom_Input()
        let buttonNeutral = new Atom_ButtonNeutral()
        this.fillSlot("input", input.getElement())
        this.fillSlot("button-neutral", buttonNeutral.getElement());
    }

}