import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading4} from "../atoms/Atom_Heading4.mjs";
import {Atom_Icon} from "../atoms/Atom_Icon.mjs";

export function Molecule_Logo(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_logo">
                    ${this.slot(this.subComponents.atom_icon)}
                    ${this.slot(this.subComponents.atom_heading4)}
            </div>
        `
    }
}