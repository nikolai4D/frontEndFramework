import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { Atom_Heading4 } from "nd_frontend/generics/components/atoms/Atom_Heading4.mjs"
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Atom_Input } from "nd_frontend/generics/components/atoms/Atom_Input.mjs"
import { Atom_ButtonGrey } from "nd_frontend/generics/components/atoms/Atom_ButtonGrey.mjs"
import { Molecule_HeaderAndText } from "nd_frontend/generics/components/molecules/Molecule_HeaderAndText.mjs"
import { slot } from "nd_frontend/core/helpers.mjs";
import { Molecule_Paginator } from "nd_frontend/generics/components/molecules/Molecule_Paginator.mjs"

export function Template_SearchResult_View(view){
    
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
        <div class="search-result-container">
                <div class="search-result-content">
                    ${slot("searchInput")}
                    ${slot('searchBtn')}
                    <div class="overflow-container">
                        ${searchResult}
                    </div>
                    <div class="paginator-placement">
                    ${slot("paginator")}
                    </div>
                </div>
            </div>
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        let atom_heading4 = new Atom_Heading4(model.atom_heading4)

        this.fillSlot("organismNavbar", organismNavbar.getElement())
        this.fillSlot("atomHeader", atom_heading4.getElement())

        let atom_input = new Atom_Input(model.atom_input)
        this.fillSlot("searchInput", atom_input.getElement())
        
        let atom_button = new Atom_ButtonGrey(model.atom_button)
        this.fillSlot("searchBtn", atom_button.getElement())
            
        for (let result in model.searchResult ) {
             let searchResult = new Molecule_HeaderAndText(model.searchResult[result])
        this.fillSlot("searchResult" + result, searchResult.getElement());
        }

        let paginator = new Molecule_Paginator(model.molecule_paginator)
        this.fillSlot("paginator", paginator.getElement())
    }
}