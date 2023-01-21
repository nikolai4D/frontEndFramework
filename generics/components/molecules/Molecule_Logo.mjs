import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading6} from "../atoms/Atom_Heading6.mjs";
import {Atom_Icon} from "../atoms/Atom_Icon.mjs";

export function Molecule_Logo() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_logo">
                    ${slot("icon")}
                    ${slot("heading6")}
            </div>
        `
    }

    this.bindScript= function() {
        let icon = new Atom_Icon()
        let heading6 = new Atom_Heading6()
        this.fillSlot("icon", icon.getElement());
        this.fillSlot("heading6", heading6.getElement());




    }

}