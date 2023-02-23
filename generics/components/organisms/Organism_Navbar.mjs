import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Molecule_IconAndLink } from "../molecules/Molecule_IconAndLink.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { Atom_Text1 } from "nd_frontend/generics/components/atoms/Atom_Text1.mjs";
import { Atom_ButtonNeutral } from "nd_frontend/generics/components/atoms/Atom_ButtonNeutral.mjs";
import { Modal } from "../organisms/Modal.mjs"
import { Organism_UserProfileContent } from "nd_frontend/generics/components/organisms/Organism_UserProfileContent.mjs";

export function Organism_Navbar(model){
    Component.call(this)

    this.getHtml = function(){

        return `
        <div>
            <nav class="my-nav">
                ${slot("logo")}
                <ul>
                    ${slot("link1")}
                    ${slot("link2")}
                    ${slot("link3")}
                    ${slot("link4")}
                    ${slot("link5")}
                </ul>  
                <div class="organism_user-navbar">
                <div class="user-text">
                    ${slot("text")}
                </div>
                ${slot("btn")}
            </nav>
            <div id="user-modal"></div>
            </div>
        </div>
        
        `
    }
    this.bindScript = function(){

        let logo = new Molecule_Logo(model.molecule_logo)
        let heading = new Atom_Text1(model.atom_heading4)
        let button = new Atom_ButtonNeutral(model.atom_buttonPositive)

        let link1 = new Molecule_IconAndLink(model.molecule_iconAndLink1)
        let link2 = new Molecule_IconAndLink(model.molecule_iconAndLink2)
        let link3 = new Molecule_IconAndLink(model.molecule_iconAndLink3)
        let link4 = new Molecule_IconAndLink(model.molecule_iconAndLink4)
        let link5 = new Molecule_IconAndLink(model.molecule_iconAndLink5)
        
        this.fillSlot("logo", logo.getElement());
        this.fillSlot("link1", link1.getElement())
        this.fillSlot("link2", link2.getElement())
        this.fillSlot("link3", link3.getElement())
        this.fillSlot("link4", link4.getElement())
        this.fillSlot("link5", link5.getElement())
        this.fillSlot("text", heading.getElement());
        this.fillSlot("btn", button.getElement());

        this.getElement().querySelector(".user-text").addEventListener("click", (e) => {
            const modalId = document.getElementById("user-modal")
            modalId.innerHTML = `
                ${slot("new-modal")}
            `
            this.modal = new Modal(
              this.content = new Organism_UserProfileContent(model.organism_userProfileContent)
            )
            this.fillSlot("new-modal", this.modal.getElement());
            }); 
    }
}