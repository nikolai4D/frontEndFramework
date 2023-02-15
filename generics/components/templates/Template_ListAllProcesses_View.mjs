import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs";
import { Organism_ListAll } from "../organisms/Organism_ListAll.mjs";
import { Organism_ProcessModal } from "../organisms/Organism_ProcessModal.mjs";
import { Modal_ProcessListAll } from "../organisms/Modal_ProcessListAll.mjs";

export function Template_ListAllProcesses_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
            ${slot("organismNavbar")}
            ${slot("organismListAll")}
            ${slot("modalprocess")}
            <div id="modal-processView"></div>
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        let organism_listAll = new Organism_ListAll(model.organism_listAll)
        let modalprocess = new Organism_ProcessModal(model.organism_processModal)

        this.fillSlot("organismNavbar", organismNavbar.getElement())
        this.fillSlot("organismListAll", organism_listAll.getElement())
        this.fillSlot("modalprocess", modalprocess.getElement())

        this.getElement().querySelector("#organism-proc-lists").addEventListener("click", (e) => {
            console.log('btn-project button pressed')     

            const modalId = document.getElementById('modal-processView')
            
            modalId.innerHTML = `
                <div>
                    ${slot("new-modal")}
                </div>
                `
            this.modal = new Modal_ProcessListAll(model.content)

            this.fillSlot("new-modal", this.modal.getElement());
        });
    }
}