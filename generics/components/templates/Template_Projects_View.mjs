import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_ButtonFilledPictures } from "../organisms/Organism_ButtonFilledPictures.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Modal_ProjectInfo } from "../organisms/Modal_ProjectInfo.mjs";
import { Modal_AddProjectProjectsView } from "../organisms/Modal_AddProjectProjectsView.mjs"

export function Template_Projects_View ( view )
{

    Component.call( this );

    this.getHtml = function ()
    {
        return `
        <div class="grid-template-projects">
            ${slot("organismNavbar")}
            ${ slot( "organismButtonFilledPictures" ) }
            <div id="modal-addProject"></div>
            <div id="modal-projectInfo"></div>

        </div>`;
    };

    this.bindScript = function ()
    {
        let model = State.views[ view ].components;

        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        this.fillSlot("organismNavbar", organismNavbar.getElement())

        let organismButtonFilledPictures = new Organism_ButtonFilledPictures( model.Organism_ButtonFilledPictures );

        this.fillSlot( "organismButtonFilledPictures", organismButtonFilledPictures.getElement() );

        this.getElement().querySelector("#org-cards-container").addEventListener("click", (e) => {

            const modalProjInfo = document.getElementById('modal-projectInfo')

            modalProjInfo.innerHTML = `
                ${slot("new-modal")}
            `
            this.modal = new Modal_ProjectInfo(model.content)

            this.fillSlot("new-modal", this.modal.getElement());
        })

        this.getElement().querySelector(".atom_button-positive").addEventListener("click", (e) => {

            const modalId = document.getElementById('modal-addProject')

            modalId.innerHTML = `
            <div>
                ${slot("new-modal")}
            </div>
            `
            this.modal = new Modal_AddProjectProjectsView(model.content2)

            this.fillSlot("new-modal", this.modal.getElement());

        });
    };
}