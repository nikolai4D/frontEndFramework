import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading4} from "../atoms/Atom_Heading4.mjs";
import {a_Icon} from "../atoms/a_Icon.mjs";

export function m_Logo(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_logo">
                    ${this.slot(this.subComponents.icon)}
                    ${this.slot(this.subComponents.heading)}
            </div>
        `
    }
}