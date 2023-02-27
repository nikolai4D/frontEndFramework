import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Icon } from "../atoms/Atom_Icon.mjs";
import { Molecule_ModalOrgInputAndOutput } from "../molecules/Molecule_ModalOrgInputAndOutput.mjs";
import { Molecule_ModalOrganisationLists } from "../molecules/Molecule_ModalOrganisationLists.mjs";


export function Organism_OrganisationModal(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="organism_organisation-modal">
                ${slot("inputProcOutput")}
                ${slot("icon")}
                ${slot("lists")}
            </div>
        ` 
    }

    this.bindScript= function() {

        let inputProcOutput = new Molecule_ModalOrgInputAndOutput(model.molecule_modalOrg_InputOutput)
        this.fillSlot("inputProcOutput", inputProcOutput.getElement());

        let lists = new Molecule_ModalOrganisationLists(model.molecule_modalOrg_lists)
        this.fillSlot("lists", lists.getElement());

        let icon = new Atom_Icon(model.atom_icon)
        this.fillSlot("icon", icon.getElement());
    }
}
