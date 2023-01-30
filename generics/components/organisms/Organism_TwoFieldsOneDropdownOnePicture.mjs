import {slot} from "../../../core/helpers.mjs";
import {Atom_Input} from "../atoms/Atom_Input.mjs";
import {Component} from "../../../core/Component.mjs";
import {Atom_Dropdown} from "../atoms/Atom_Dropdown.mjs";
import {Atom_Image} from "../atoms/Atom_Image.mjs";

export function Organism_TwoFieldsOneDropdownOnePicture(model) {
    Component.call(this, model)

    this.getHtml = function () {
        return `
            <div class="organism_two-fields-one-dropdown-one-picture">
                <div class="organism_two-fields-one-dropdown-one-picture__first-column">
                    ${slot('field1')}
                    ${slot('field2')}
                    ${slot('dropdown')}
                </div>
                ${slot('image')}
            </div>
        `;
    }


    this.bindScript = function() {
        const field1 = new Atom_Input(model.atom_input__1)
        this.fillSlot('field1', field1.getElement())

        const field2 = new Atom_Input(model.atom_input__2)
        this.fillSlot('field2', field2.getElement())

        const dropdown = new Atom_Dropdown(model.atom_dropdown)
        this.fillSlot('dropdown', dropdown.getElement())

        const picture = new Atom_Image(model.atom_picture)
        this.fillSlot('image', picture.getElement())
  }
}