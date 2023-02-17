import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Input } from "../atoms/Atom_Input.mjs";
import { Atom_Text1 } from "../atoms/Atom_Text1.mjs";

export function Molecule_TextAndInput(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_text_input">
                ${slot("text")}
                ${slot("input")}
            </div>
        ` 
    }

    this.bindScript= function() {
        let text = new Atom_Text1(model.atom_text1)
        this.fillSlot("text", text.getElement());

        let input = new Atom_Input(model.atom_input)
        this.fillSlot("input", input.getElement());
    }
}