import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading6} from "../atoms/Atom_Heading6.mjs";
import {Atom_ButtonPositive} from "../atoms/Atom_ButtonPositive.mjs";
import {Atom_Dropdown} from "../atoms/Atom_Dropdown.mjs";

export function Form4Dropdowns(model) {
    Component.call(this)


    this.getHtml = function() {
        return `
            <div class="form-4-dropdowns">
                <div>
                    ${slot("heading1")}
                    ${slot("dropdown1")}
                </div>
                <div>
                    ${slot("heading2")}
                    ${slot("dropdown2")}
                </div>
                <div>
                    ${slot("heading3")}
                    ${slot("dropdown3")}
                </div>
                <div>
                    ${slot("heading4")}
                    ${slot("dropdown4")}
                </div>
                
                ${slot("button-positive")}
            </div>
        `
    }

    this.bindScript= function() {

        let heading1 = new Atom_Heading6(model.heading1)
        let heading2 = new Atom_Heading6(model.heading2)
        let heading3 = new Atom_Heading6(model.heading3)
        let heading4 = new Atom_Heading6(model.heading4)

        this.fillSlot("heading1", heading1.getElement())
        this.fillSlot("heading2", heading2.getElement())
        this.fillSlot("heading3", heading3.getElement())
        this.fillSlot("heading4", heading4.getElement())


        let dropdown1 = new Atom_Dropdown(model.dropdown1)
        let dropdown2 = new Atom_Dropdown(model.dropdown2)
        let dropdown3 = new Atom_Dropdown(model.dropdown3)
        let dropdown4 = new Atom_Dropdown(model.dropdown4)

        this.fillSlot("dropdown1", dropdown1.getElement())
        this.fillSlot("dropdown2", dropdown2.getElement())
        this.fillSlot("dropdown3", dropdown3.getElement())
        this.fillSlot("dropdown4", dropdown4.getElement())

        let buttonPositive = new Atom_ButtonPositive(model.buttonPositive)
        this.fillSlot("button-positive", buttonPositive.getElement())

    }
}