import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Molecule_ModalSearchResultDetail } from "../molecules/Molecule_ModalSearchResultDetail.mjs";

export function Template_SearchResult_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("organismNavbar")}
        ${slot("modal")}
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let modal = new Molecule_ModalSearchResultDetail(model.content)
        let organismNavbar = new Organism_Navbar(model.organism_navbar)

        this.fillSlot("modal", modal.getElement())
        this.fillSlot("organismNavbar", organismNavbar.getElement())
       
    }
}