import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Dropdown } from "../atoms/Atom_Dropdown.mjs"
import { Atom_Icon } from "../atoms/Atom_Icon.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs";

export function Molecule_ModalChildrenBoxes(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_text_and_dropdown">
                ${slot("icon1")}
                <div class="molecule_modal-proc-children"> 
                    ${slot("text1")}
                    ${slot("icon2")}
                    ${slot("text2")}
                    ${slot("icon3")}
                    ${slot("text3")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let icon1 = new Atom_Icon(model.atom_icon1)
        this.fillSlot("icon1", icon1.getElement());

        let text1 = new Atom_Heading4(model.atom_heading4a)
        this.fillSlot("text1", text1.getElement());

        let icon2 = new Atom_Icon(model.atom_icon2)
        this.fillSlot("icon2", icon2.getElement());

        let text2 = new Atom_Heading4(model.atom_heading4b)
        this.fillSlot("text2", text2.getElement());

        let icon3 = new Atom_Icon(model.atom_icon3)
        this.fillSlot("icon3", icon3.getElement());

        let text3 = new Atom_Heading4(model.atom_heading4c)
        this.fillSlot("text3", text3.getElement());
    }

}