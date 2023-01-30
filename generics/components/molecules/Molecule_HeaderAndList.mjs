import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading4} from "../atoms/Atom_Heading4.mjs";
import {Molecule_ListItems} from "./Molecule_ListItems.mjs";

export function Molecule_HeaderAndList(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_header-and-text">
                    ${slot("heading4")}
                    ${slot("listItems")}
            </div>
        `
    }

    this.bindScript= function() {  
        let heading4 = new Atom_Heading4(model.atom_heading4)
        const listItemsComp = new Molecule_ListItems(model.items)

        this.fillSlot("heading4", heading4.getElement());
        this.fillSlot("listItems", listItemsComp.getElement())
    }

}