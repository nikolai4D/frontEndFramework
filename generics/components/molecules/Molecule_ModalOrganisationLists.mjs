import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Icon } from "../atoms/Atom_Icon.mjs";
import { Molecule_List } from "./Molecule_List.mjs";

export function Molecule_ModalOrganisationLists(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_modal_org_lists">
                ${slot("list1")}
                ${slot("list2")}
                ${slot("list3")}
            </div>
        `
    }

    this.bindScript= function() {
        let list1 = new Molecule_List(model.lists1)
        this.fillSlot("list1", list1.getElement());

        let list2 = new Molecule_List(model.lists2)
        this.fillSlot("list2", list2.getElement());

        let list3 = new Molecule_List(model.lists3)
        this.fillSlot("list3", list3.getElement());
    }
}