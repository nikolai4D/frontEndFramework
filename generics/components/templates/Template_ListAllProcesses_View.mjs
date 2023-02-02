import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs"
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Molecule_InputAndButton } from "../molecules/Molecule_InputAndButton.mjs";
import { Molecule_List } from "../molecules/Molecule_List.mjs";

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
            <div>
                ${slot("moleculeList1")}
                ${slot("moleculeList2")}
                ${slot("moleculeList3")}
            <div>
            <div>
                ${slot("moleculeList4")}
                ${slot("moleculeList5")}
                ${slot("moleculeList6")}
            <div>
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        let atom_heading4 = new Atom_Heading4(model.atom_heading4)
        let heading = new Atom_Heading4(model.atom_heading4)
        let mol_inputBtn = new Molecule_InputAndButton(model.molecule_inputAndButton)
        let mol_list1 = new Molecule_List(model.molecule_list1)
        let mol_list2 = new Molecule_List(model.molecule_list1)
        let mol_list3 = new Molecule_List(model.molecule_list1)
        let mol_list4 = new Molecule_List(model.molecule_list2)
        let mol_list5 = new Molecule_List(model.molecule_list2)
        let mol_list6 = new Molecule_List(model.molecule_list2)
         


        this.fillSlot("organismNavbar", organismNavbar.getElement())
        this.fillSlot("atomHeader", atom_heading4.getElement())
        this.fillSlot("heading", heading.getElement())
        this.fillSlot("mol_Input_Btn", mol_inputBtn.getElement())

        this.fillSlot("moleculeList1", mol_list1.getElement())
        this.fillSlot("moleculeList2", mol_list2.getElement())
        this.fillSlot("moleculeList3", mol_list3.getElement())
        this.fillSlot("moleculeList4", mol_list4.getElement())
        this.fillSlot("moleculeList5", mol_list5.getElement())
        this.fillSlot("moleculeList6", mol_list6.getElement())

    }
}