import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Text1} from "../atoms/Atom_Text1.mjs";
import { Atom_Dropdown } from "../atoms/Atom_Dropdown.mjs"

export function Molecule_TextAndDropdown(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_text_and_btn">
            ${slot("roleText")}
            ${slot("textDropdown")}
            </div>
        `
    }

    this.bindScript= function() {
        let role = new Atom_Text1(model.atom_text1)
        let dropdown = new Atom_Dropdown(model.atom_dropdown)
        this.fillSlot("roleText", role.getElement());
        this.fillSlot("textDropdown", dropdown.getElement());
    }

}