import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
<<<<<<< HEAD
import { Atom_ButtonNeutral } from "../atoms/Atom_ButtonNeutral.mjs"
import { Atom_Input } from "../atoms/Atom_Input.mjs";
=======
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs"
import { Atom_ButtonGrey } from "../atoms/Atom_ButtonGrey.mjs"
>>>>>>> 8b11c13df71971952b52f6fdb5c758fdfc6d2be6
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Atom_Input } from "../atoms/Atom_Input.mjs";
import { Molecule_HeadingIconAndText } from "../molecules/Molecule_HeadingIconAndText.mjs";
import { Molecule_Paginator } from "../molecules/Molecule_Paginator.mjs"


export function Template_Search_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        let model = State.views[view].components;
        let searchResult = "";
        for (let i in model.searchResult) {
            searchResult += `${slot("searchResult" + i)}`
        }
        return `<div>
        ${slot("organismNavbar")}
        ${slot("atomHeader")}
        <div class="grid">
            <div class="grid-placement__c2-2r3">
                ${slot("searchInput")}
                ${slot("searchButton")}
            </div>
        </div>
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        this.fillSlot("organismNavbar", organismNavbar.getElement())

        let searchInput = new Atom_Input(model.atom_input)
        this.fillSlot("searchInput", searchInput.getElement())

        let searchButton = new Atom_ButtonNeutral(model.atom_button)
        this.fillSlot("searchButton", searchButton.getElement())
    }
}