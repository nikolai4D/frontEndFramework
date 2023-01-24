import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Button } from "../atoms/Button.mjs";
import { Atom_Heading1 } from "../atoms/Atom_Heading1.mjs"
import { Paragraph } from "../atoms/Paragraph.mjs"


export function Molecule_Card(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_card">
            <img src="" class="project-img" alt="Avatar">
                <div class="molecule-content">
                    ${slot("heading1")}
                    ${slot("paragraph")}
                    ${slot("button")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {  
        let heading1 = new Atom_Heading1(model.atom_heading1)
        let paragraph = new Paragraph(model.atom_paragraph)
        let button = new Button(model.atom_button)
        this.fillSlot("heading1", heading1.getElement())
        this.fillSlot("paragraph", paragraph.getElement())
        this.fillSlot("button", button.getElement())
    }

}