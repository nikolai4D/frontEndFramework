import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs";
import { Atom_Text1 } from "../atoms/Atom_Text1.mjs";
import { Atom_Image } from "../atoms/Atom_Image.mjs";

export function Molecule_headingAboutImage(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_heading-abt-img">
                <div class="mol_heading-abt">
                ${slot("heading")}
                ${slot("about")}
                </div>
                <div>
                    ${slot("picture")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {
        let heading = new Atom_Heading4(model.atom_heading4)
        this.fillSlot("heading", heading.getElement());

        let about = new Atom_Text1(model.atom_text1)
        this.fillSlot("about", about.getElement());

        let picture = new Atom_Image(model.atom_image)
        this.fillSlot("picture", picture.getElement());
    }

}
