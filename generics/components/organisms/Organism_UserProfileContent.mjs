import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Molecule_TextAndInput } from "nd_frontend/generics/components/molecules/Molecule_TextAndInput.mjs";
import { Molecule_TextAndDropdown } from "nd_frontend/generics/components/molecules/Molecule_TextAndDropdown.mjs";
import { Atom_ButtonPositive} from "nd_frontend/generics/components/atoms/Atom_ButtonPositive.mjs"
import { Atom_Image} from "nd_frontend/generics/components/atoms/Atom_Image.mjs"

export function Organism_UserProfileContent(model) {
    Component.call(this)

    this.getHtml = function(){
        return `
                  <div class="organism_user-modal">
                  <div class="upper-section">
                  <div class="input-fields">
                      ${slot("nameAndInput")}
                      ${slot("emailAndInput")}
                      ${slot("roleAndDropdown")}
                  </div>
                  <div class="image-field">
                      ${slot("image")}
                  </div>
                  </div>
                  <div class="organism_lower-section">
                      ${slot("button")}  
                  </div>
              </div>           
        `
    }

    this.bindScript = function(){
        let nameInput = new Molecule_TextAndInput(model.molecule_nameInput)
        this.fillSlot("nameAndInput", nameInput.getElement())
        
        let emailInput = new Molecule_TextAndInput(model.molecule_emailInput)
        this.fillSlot("emailAndInput", emailInput.getElement())

        let textDropdown = new Molecule_TextAndDropdown(model.molecule_textAndDropdown)
        this.fillSlot("roleAndDropdown", textDropdown.getElement())

        let button =  new Atom_ButtonPositive(model.atom_buttonPositive)
        this.fillSlot("button", button.getElement())

        let image = new Atom_Image(model.atom_image)
        this.fillSlot("image", image.getElement())
    }
}