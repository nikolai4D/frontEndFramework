import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Link } from "../atoms/Link.mjs";
import {Atom_Icon} from "../atoms/Atom_Icon.mjs";

export function Molecule_IconAndLink(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_icon_and_link">
                    ${slot("icon")}
                    ${slot("link")}
            </div>
        `
    }

    this.bindScript= function() {
        let icon = new Atom_Icon(model.atom_icon)
        let link = new Link(model.atom_link)
        this.fillSlot("icon", icon.getElement());
        this.fillSlot("link", link.getElement());
    }
}