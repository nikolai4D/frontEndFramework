import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Text1} from "../atoms/Atom_Text1.mjs";
import { Atom_Input } from "../atoms/Atom_Input.mjs";

export function Molecule_TextAndInput(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_text_and_btn">
            ${slot("user")}
            ${slot("input")}
            </div>
        `
    }

    this.bindScript= function() {
        let user = new Atom_Text1(model.atom_text1)
        let input = new Atom_Input(model.atom_input)
        this.fillSlot("user", user.getElement());
        this.fillSlot("input", input.getElement());
    }

}