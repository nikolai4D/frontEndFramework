import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_ButtonBasic  } from "../atoms/Atom_ButtonBasic.mjs";
import {Atom_Input} from "../atoms/Atom_Input.mjs";

export function Molecule_InputAndButton(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_icon_and_link">
                    ${slot("input")}
                    ${slot("button")}
            </div>
        `
    }

    this.bindScript= function() {
        let input = new Atom_Input(model.atom_input)
        let button = new Atom_ButtonBasic(model.atom_buttonBasic)
        this.fillSlot("input", input.getElement());
        this.fillSlot("button", button.getElement());
    }
}