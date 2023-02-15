import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Text1} from "../atoms/Atom_Text1.mjs";
import { Atom_Icon } from "../atoms/Atom_Icon.mjs";
import { Molecule_List } from "./Molecule_List.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs";

export function Molecule_ModalInputProcOutput(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_modal_in-output">
                ${slot("box1")}
                ${slot("icon1")}
                <div class="molecule_process_bigBox">
                    ${slot("box2")}
                    ${slot("box2b")}
                </div>
                ${slot("icon2")}
                ${slot("box3")}
            </div>
        `
    }

    this.bindScript= function() {
        let box1 = new Molecule_List(model.lists1)
        this.fillSlot("box1", box1.getElement());

        let icon1 = new Atom_Icon(model.atom_icon1)
        this.fillSlot("icon1", icon1.getElement());

        let box2 = new Atom_Heading4(model.atom_heading4)
        this.fillSlot("box2", box2.getElement());

        let box2b = new Atom_Text1(model.atom_text1)
        this.fillSlot("box2b", box2b.getElement());

        let icon2 = new Atom_Icon(model.atom_icon2)
        this.fillSlot("icon2", icon2.getElement());

        let box3 = new Molecule_List(model.lists2)
        this.fillSlot("box3", box3.getElement());
    }

}