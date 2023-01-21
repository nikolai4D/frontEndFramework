import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs";
import {Atom_Text1} from "../atoms/Atom_Text1.mjs";

export function Molecule_HeaderAndText() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="grid__c1r7 molecule_header-and-text">
                <div class="grid-placement__c1r1">
                    ${slot("heading4")}
                    ${slot("text")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {  
        let heading4 = new Atom_Heading4()
        let text1 = new Atom_Text1()
        this.fillSlot("heading4", heading4.getElement());
        this.fillSlot("text1", text1.getElement());
    }

}