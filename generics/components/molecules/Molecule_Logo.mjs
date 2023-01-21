import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading1} from "../atoms/Atom_Heading1.mjs";
import {Atom_Icon} from "../atoms/Atom_Icon.mjs";

export function Molecule_Logo() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_logo">
                <div class="">
                    ${slot("icon")}
                    ${slot("heading1")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let icon = new Atom_Icon()
        let heading1 = new Atom_Heading1()
        this.fillSlot("icon", icon.getElement());
        this.fillSlot("heading1", heading1.getElement());




    }

}