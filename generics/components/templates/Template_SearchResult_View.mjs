import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { Atom_Heading4 } from "nd_frontend/generics/components/atoms/Atom_Heading4.mjs"
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Organism_SearchResultDetail } from "../organisms/Organism_SearchResultDetail.mjs";
import { Molecule_ModalSearchResultDetail } from "../molecules/Molecule_ModalSearchResultDetail.mjs";

export function Template_SearchResult_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("organismNavbar")}
        ${slot("modal")}
        ${slot("organismSearchResultDetail")}
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let modal = new Molecule_ModalSearchResultDetail(model.content)
        let organismNavbar = new Organism_Navbar(model.content.organism_navbar)
        let organismSearchResultDetail = new Organism_SearchResultDetail(model.organism_searchResultDetail)

        this.fillSlot("modal", modal.getElement())
        this.fillSlot("organismNavbar", organismNavbar.getElement())
        this.fillSlot("organismSearchResultDetail", organismSearchResultDetail.getElement())
    }
}