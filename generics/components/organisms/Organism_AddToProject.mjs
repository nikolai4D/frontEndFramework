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
                <div class="org_add-to-proj-btn">
                ${slot("button")}
                <div>
            </div>
        ` 
    }

    this.bindScript= function() {
        let relProj = new Molecule_textAndDropDown(model.molecule_textAndDropDown1)
        this.fillSlot("relProj", relProj.getElement());

        let relInfo = new Molecule_textAndDropDown(model.molecule_textAndDropDown2)
        this.fillSlot("relInfo", relInfo.getElement());

        let relProc = new Molecule_textAndDropDown(model.molecule_textAndDropDown3)
        this.fillSlot("relProc", relProc.getElement());

        let relOrg = new Molecule_textAndDropDown(model.molecule_textAndDropDown4)
        this.fillSlot("relOrg", relOrg.getElement());

        let button = new Atom_ButtonPositive(model.atom_buttonPositive2)
        this.fillSlot("button", button.getElement());
    }
}