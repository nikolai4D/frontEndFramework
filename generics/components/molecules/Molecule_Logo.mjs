import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading4} from "../atoms/Atom_Heading4.mjs";
import {Atom_Icon} from "../atoms/Atom_Icon.mjs";

export function Molecule_Logo(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_logo">
                    ${slot("icon")}
                    ${slot("heading4")}
            </div>
        `
    }

    this.bindScript= function() {
        let icon = new Atom_Icon(model.atom_icon)
        let heading4 = new Atom_Heading4(model.atom_heading4)
        this.fillSlot("icon", icon.getElement());
        this.fillSlot("heading4", heading4.getElement());




    }

}