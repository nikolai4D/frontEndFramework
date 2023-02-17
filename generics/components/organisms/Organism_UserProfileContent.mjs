import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Molecule_TextAndInput } from "../molecules/Molecule_TextAndInput.mjs";
import { Molecule_textAndDropDown } from "../molecules/Molecule_TextAndDropdown.mjs";
import { Atom_ButtonPositive} from "../atoms/Atom_ButtonPositive.mjs"
import { Atom_Image} from "../atoms/Atom_Image.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";

export function Organism_UserProfileContent(model) {
    Component.call(this)

    this.getHtml = function(){
        return `
                <div id="modal-background" class="organism_user-modal">
                    <div class="modal-title-section">
                        <div class="organism_x-button">
                            <i class="bi bi-x"></i>
                        </div>
                    </div> 
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

        let textDropdown = new Molecule_textAndDropDown(model.molecule_textAndDropdown)
        this.fillSlot("roleAndDropdown", textDropdown.getElement())

        let button =  new Atom_ButtonPositive(model.atom_buttonPositive)
        this.fillSlot("button", button.getElement())

        let image = new Atom_Image(model.atom_image)
        this.fillSlot("image", image.getElement())

        this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
            document.querySelectorAll(".organism_user-modal")[0].remove()
            let modalBg = document.getElementById("modal-user")
            modalBg.style.removeProperty("background-color")
        });
    }
}