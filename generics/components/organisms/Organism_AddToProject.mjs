import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs"
import { Molecule_textAndDropDown } from "../molecules/Molecule_textAndDropDown.mjs"

export function Organism_AddToProject(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="organism_add-to-proj">
                ${slot("relProj")}
                ${slot("relInfo")}
                ${slot("relProc")}
                ${slot("relOrg")}
                ${slot("button")}
            </div>
        ` 
    }

    this.bindScript= function() {
        let relProj = new Molecule_textAndDropDown(model.molecule_textAndDropDown1)
        this.fillSlot("user", relProj.getElement());

        let relInfo = new Molecule_textAndDropDown(model.molecule_textAndDropDown1)
        this.fillSlot("user", relInfo.getElement());

        let relProc = new Molecule_textAndDropDown(model.molecule_textAndDropDown1)
        this.fillSlot("user", relProc.getElement());

        let relOrg = new Molecule_textAndDropDown(model.molecule_textAndDropDown1)
        this.fillSlot("user", relOrg.getElement());

        let button = new Atom_ButtonPositive(model.atom_button)
        this.fillSlot("user", button.getElement());
    }
}