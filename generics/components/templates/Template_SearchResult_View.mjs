import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Atom_Input } from "nd_frontend/generics/components/atoms/Atom_Input.mjs"
import { Atom_ButtonPositive } from "nd_frontend/generics/components/atoms/Atom_ButtonPositive.mjs"
import { Molecule_Paginator } from "nd_frontend/generics/components/molecules/Molecule_Paginator.mjs"
import { Molecule_HeadingIconAndText } from "nd_frontend/generics/components/molecules/Molecule_HeadingIconAndText.mjs";
import { Modal_SearchResultDetail } from "../organisms/Modal_SearchResultDetail.mjs";

export function Template_SearchResult_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("organismNavbar")}
       
        <div class="search-result-container">
                <div class="search-result-content">
                    ${slot("searchInput")}
                    ${slot('searchBtn')}
                    <div class="overflow-container">
                        ${slot("informationResult")}
                        ${slot("processResult")}
                        ${slot("organisationResult")}
                    </div>
                    <div class="paginator-placement">
                    ${slot("paginator")}
                    </div>
                    <div id="modal-id">
                    </div>
                </div>
            </div>
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;

        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        this.fillSlot("organismNavbar", organismNavbar.getElement())

        let atom_input = new Atom_Input(model.atom_input)
        this.fillSlot("searchInput", atom_input.getElement())
        
        let atom_button = new Atom_ButtonPositive(model.atom_button)
        this.fillSlot("searchBtn", atom_button.getElement())

        let informationResult = new Molecule_HeadingIconAndText(model.informationResult)
        this.fillSlot("informationResult", informationResult.getElement())

        let processResult = new Molecule_HeadingIconAndText(model.processResult)
        this.fillSlot("processResult", processResult.getElement())
        let organisationResult = new Molecule_HeadingIconAndText(model.organisationResult)
        this.fillSlot("organisationResult", organisationResult.getElement())
        
        let paginator = new Molecule_Paginator(model.molecule_paginator)
        this.fillSlot("paginator", paginator.getElement())


        this.getElement().querySelector(".overflow-container").addEventListener("click", (e) => {
      
            const modalId = document.getElementById('modal-id')
      
            modalId.innerHTML = `
            <div>
                ${slot("new-modal")}
                <div id="modal-id-second"></div>
            </div>
            `
            this.modal = new Modal_SearchResultDetail(model.content)

            this.fillSlot("new-modal", this.modal.getElement());
        });
    }
}