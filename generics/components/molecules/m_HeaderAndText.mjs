import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs";
import {Atom_Text1} from "../atoms/Atom_Text1.mjs";

export function m_HeaderAndText() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_header-and-text">
                    ${this.slot(this.subComponents.heading)}
                    ${this.slot(this.subComponents.text)}
            </div>
        `
    }

}