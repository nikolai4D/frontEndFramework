import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { Atom_Heading4 } from "nd_frontend/generics/components/atoms/Atom_Heading4.mjs"
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Molecule_InputAndButton } from "../molecules/Molecule_InputAndButton.mjs";

export function Template_ListAllProcesses_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("organismNavbar")}
        ${slot("atomHeader")}
            <div class="heading_mol_input_btn">
                ${slot("heading")}
                ${slot("mol_Input_Btn")}
            </div>
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        let atom_heading4 = new Atom_Heading4(model.atom_heading4)
        let heading = new Atom_Heading4(model.atom_heading4)
        let mol_inputBtn = new Molecule_InputAndButton(model.molecule_inputAndButton)

        this.fillSlot("organismNavbar", organismNavbar.getElement())
        this.fillSlot("atomHeader", atom_heading4.getElement())
        this.fillSlot("heading", heading.getElement())
        this.fillSlot("mol_Input_Btn", mol_inputBtn.getElement())
    }
}