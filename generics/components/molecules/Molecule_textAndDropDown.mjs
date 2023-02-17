import {Component} from "nd_frontend/core/Component.mjs";
import {slot} from "nd_frontend/core/helpers.mjs";
import { Atom_Text1} from "nd_frontend/generics/components/atoms/Atom_Text1.mjs";
import { Atom_Dropdown } from "nd_frontend/generics/components/atoms/Atom_Dropdown.mjs"

export function Molecule_textAndDropDown(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_text_and_dropdown">
                ${slot("text")}
                ${slot("dropdown")}
            </div>
        `
    }

    this.bindScript= function() {
        let text = new Atom_Text1(model.atom_text1)
        this.fillSlot("text", text.getElement());

        let dropdown = new Atom_Dropdown(model.atom_dropdown)
        this.fillSlot("dropdown", dropdown.getElement());
    }

}