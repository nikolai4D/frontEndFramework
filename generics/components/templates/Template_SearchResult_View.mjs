import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { Atom_Heading4 } from "nd_frontend/generics/components/atoms/Atom_Heading4.mjs"
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Organism_SearchResultDetail } from "../organisms/Organism_SearchResultDetail.mjs";
import { Molecule_ModalSearchResultDetail } from "../molecules/Molecule_ModalSearchResultDetail.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";

export function Template_SearchResult_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("organismNavbar")}
        ${slot("modal")}
        ${slot("button")}
        
        </div>`
    }

    // ${slot("organismSearchResultDetail")}

    this.bindScript = function() {
        let model = State.views[view].components;
        let modal = new Molecule_ModalSearchResultDetail(model.content)
        let button = new Atom_ButtonPositive(model.content.buttonPositive1)
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        // let organismSearchResultDetail = new Organism_SearchResultDetail(model.content.organism_searchResultDetail)


        this.fillSlot("button", button.getElement())
        this.fillSlot("modal", modal.getElement())
        this.fillSlot("organismNavbar", organismNavbar.getElement())
        // this.fillSlot("organismSearchResultDetail", organismSearchResultDetail.getElement())
    }
}