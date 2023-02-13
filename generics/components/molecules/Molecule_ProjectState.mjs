import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Text1} from "../atoms/Atom_Text1.mjs";
import {Atom_Icon} from "../atoms/Atom_Icon.mjs";

export function Molecule_ProjectState(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_text_and_dropdown">
                ${slot("box1")}
                ${slot("icon1")}
                ${slot("box2")}
                ${slot("icon2")}
                ${slot("box3")}
            </div>
        `
    }

    this.bindScript= function() {
        let box1 = new Atom_Text1(model.atom_text1)
        this.fillSlot("box1", box1.getElement());

        let icon1 = new Atom_Icon(model.atom_icon1)
        this.fillSlot("icon1", icon1.getElement());

        let box2 = new Atom_Text1(model.atom_text2)
        this.fillSlot("box2", box2.getElement());

        let icon2 = new Atom_Dropdown(model.atom_icon2)
        this.fillSlot("icon2", icon2.getElement());

        let box3 = new Atom_Text1(model.atom_text3)
        this.fillSlot("box3", box3.getElement());
    }

}