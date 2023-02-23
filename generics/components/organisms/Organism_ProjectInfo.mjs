import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs"
import { Molecule_headingAboutImage } from "../molecules/Molecule_headingAboutImage.mjs";
import { Molecule_ProjectState } from "../molecules/Molecule_ProjectState.mjs";
import { Molecule_ListCheckBox } from "../molecules/Molecule_ListCheckBox.mjs";


export function Organism_ProjectInfo(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="organism_project_info">
                ${slot("molecule1")}
                ${slot("molecule2")}
                <div class="molecule-proj_info-checkboxes">
                    ${slot("checkbox1")}
                    ${slot("checkbox2")}
                </div>
                <div class="modal-projectInfo-btn">
                ${slot("button")}
                <div>
            </div>
        ` 
    }

    this.bindScript= function() {
        let molecule1 = new Molecule_headingAboutImage(model.molecule_headingAboutImage)
        this.fillSlot("molecule1", molecule1.getElement());

        let molecule2 = new Molecule_ProjectState(model.molecule_projectState)
        this.fillSlot("molecule2", molecule2.getElement());

        let checkbox1 = new Molecule_ListCheckBox(model.molecule_listCheckbox1)
        this.fillSlot("checkbox1", checkbox1.getElement());

        let checkbox2 = new Molecule_ListCheckBox(model.molecule_listCheckbox2)
        this.fillSlot("checkbox2", checkbox2.getElement());

        let button = new Atom_ButtonPositive(model.atom_buttonPositive)
        this.fillSlot("button", button.getElement());
    }
}