import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Text1} from "../atoms/Atom_Text1.mjs";
import { Atom_ButtonNeutral } from "../atoms/Atom_ButtonNeutral.mjs";
import { Modal } from "../organisms/Modal.mjs"
import { Organism_UserProfileContent } from "nd_frontend/generics/components/organisms/Organism_UserProfileContent.mjs";

export function Molecule_TextAndButton(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_text_and_btn">
            <div id="user-text">
            ${slot("user")}
            </div>
            ${slot("button")}
            <div id="user-modal"></div>
            </div>
        `
    }

    this.bindScript= function() {
        this.modal = new Modal(
            this.content = new Organism_UserProfileContent(model.organism_userProfileContent.userModal))
        let user = new Atom_Text1(model.atom_text1)
        let button = new Atom_ButtonNeutral(model.atom_button)
        this.fillSlot("user", user.getElement());
        this.fillSlot("button", button.getElement());
    }

}