import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs"
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Molecule_InputAndButton } from "../molecules/Molecule_InputAndButton.mjs";
import { Molecule_List } from "../molecules/Molecule_List.mjs";
import { Molecule_ListNoHeading } from "../molecules/Molecule_ListNoHeading.mjs";

export function Template_ListAllProcesses_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
            ${slot("organismNavbar")}
            <div class="template_process">
                <div>
                    <div class="heading_mol_input_btn">
                        ${slot("heading")}
                        ${slot("mol_Input_Btn")}
                    </div>
                    ${slot("moleculeList1")}
                    ${slot("moleculeList4")}
                </div>
                ${slot("verticalScroll")}
            </div>
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        let heading = new Atom_Heading4(model.atom_heading4)
        let mol_inputBtn = new Molecule_InputAndButton(model.molecule_inputAndButton)
        let mol_list1 = new Molecule_List(model.molecule_list1)
        // let mol_list2 = new Molecule_ListNoHeading(model.molecule_list1)
        // let mol_list3 = new Molecule_ListNoHeading(model.molecule_list1)
        let mol_list4 = new Molecule_List(model.molecule_list2)
        // let mol_list5 = new Molecule_ListNoHeading(model.molecule_list2)
        // let mol_list6 = new Molecule_ListNoHeading(model.molecule_list2)

        this.fillSlot("organismNavbar", organismNavbar.getElement())
        this.fillSlot("heading", heading.getElement())
        this.fillSlot("mol_Input_Btn", mol_inputBtn.getElement())

        this.fillSlot("moleculeList1", mol_list1.getElement())
        // this.fillSlot("moleculeList2", mol_list2.getElement())
        // this.fillSlot("moleculeList3", mol_list3.getElement())
        this.fillSlot("moleculeList4", mol_list4.getElement())
        // this.fillSlot("moleculeList5", mol_list5.getElement())
        // this.fillSlot("moleculeList6", mol_list6.getElement())

    }
}