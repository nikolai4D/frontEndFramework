import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Molecule_ModalSearchResultDetail } from "../molecules/Molecule_ModalSearchResultDetail.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";
import { Modal } from "../organisms/Modal.mjs";
import { Organism_SearchResultDetail } from "../organisms/Organism_SearchResultDetail.mjs";


export function Template_SearchResult_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("organismNavbar")}
        ${slot("modal")}
        <div class="org_searh_res_det_btn">
        ${slot("button")}
        </div>
            ${slot("new-modal")}
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let modal = new Molecule_ModalSearchResultDetail(model.content)
        let organismNavbar = new Organism_Navbar(model.organism_navbar)

        let button = new Atom_ButtonPositive(model.atom_buttonPositive)

        this.fillSlot("modal", modal.getElement())
        this.fillSlot("button", button.getElement())
        this.fillSlot("organismNavbar", organismNavbar.getElement())

        this.getElement().querySelector(".org_searh_res_det_btn").addEventListener("click", (e) => {
        console.log('btn from view pressed')
        // document.querySelectorAll('.modal')[0].add()
        
        this.modal = new Modal(
            this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)
        )
        this.fillSlot("new-modal", this.modal.getElement());
        });
    }
}