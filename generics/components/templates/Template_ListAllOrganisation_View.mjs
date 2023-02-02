import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { Atom_Heading4 } from "nd_frontend/generics/components/atoms/Atom_Heading4.mjs"
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"

export function Template_ListAllOrganisation_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("organismNavbar")}
        ${slot("atomHeader")}
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        let atom_heading4 = new Atom_Heading4(model.atom_heading4)

        this.fillSlot("organismNavbar", organismNavbar.getElement())
        this.fillSlot("atomHeader", atom_heading4.getElement())
    }
}