import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Molecule_TextAndInput } from "../molecules/Molecule_TextAndInput.mjs";
import { Molecule_textAndDropDown } from "../molecules/Molecule_textAndDropDown.mjs";
import { Atom_Image } from "../atoms/Atom_Image.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";

export function Organism_BtnPositiveAddToProject(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="organism_btn_projects_modal">
                <div class="modal_btn_projects_first_section">
                    <div class="molecule_text_input_dropdown">
                        ${slot("textInput1")}
                        ${slot("textInput2")}
                        ${slot("textDropDown")}
                    </div>
                    <div class="modal-btn_proj_image">
                        ${slot("picture")}
                    </div>
                </div>
                        ${slot("btnPositive")}
            </div>
        ` 
    }

    this.bindScript= function() {
        let textInput1 = new Molecule_TextAndInput(model.molecule_text_input1)
        this.fillSlot("textInput1", textInput1.getElement());

        let textInput2 = new Molecule_TextAndInput(model.molecule_text_input2)
        this.fillSlot("textInput2", textInput2.getElement());

        let textDropDown = new Molecule_textAndDropDown(model.molecule_text_dropdown)
        this.fillSlot("textDropDown", textDropDown.getElement());

        let picture = new Atom_Image(model.atom_image)
        this.fillSlot("picture", picture.getElement());

        let btnPositive = new Atom_ButtonPositive(model.atom_button_positive)
        this.fillSlot("btnPositive", btnPositive.getElement());
    }
}
