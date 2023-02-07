import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs";
import {Atom_Text1} from "../atoms/Atom_Text1.mjs";
import { Atom_Icon } from "nd_frontend/generics/components/atoms/Atom_Icon.mjs";

export function Molecule_HeadingIconAndText(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_heading-icon-and-text">
                <div class="molecule_heading-icon">
                    ${slot("heading4")}
                    ${slot("icon")}
                </div>
                    ${slot("text1")}
                 
            </div>
        `
    }

    this.bindScript= function() {  
        let heading4 = new Atom_Heading4(model.atom_heading4)
        let text1 = new Atom_Text1(model.atom_text1)
        this.fillSlot("heading4", heading4.getElement());
        this.fillSlot("text1", text1.getElement());

        let icon = new Atom_Icon(model.atom_icon)
        this.fillSlot("icon", icon.getElement())
    }

}