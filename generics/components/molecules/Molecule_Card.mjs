import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Button } from "../atoms/Button.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs"
import { Paragraph } from "../atoms/Paragraph.mjs"


export function Molecule_Card(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_card">
            <img src="" class="molecule_card_image" alt="Avatar">
                <div class="molecule_card_content">
                    ${slot("heading1")}
                    ${slot("paragraph")}
                    ${slot("button")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {  
        let heading4 = new Atom_Heading4(model.atom_heading4)
        let paragraph = new Paragraph(model.atom_paragraph)
        let button = new Button(model.atom_button)
        this.fillSlot("heading1", heading4.getElement())
        this.fillSlot("paragraph", paragraph.getElement())
        this.fillSlot("button", button.getElement())
    }

}