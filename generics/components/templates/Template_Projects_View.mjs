import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_ButtonFilledPictures } from "../organisms/Organism_ButtonFilledPictures.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Modal_ProjectInfo } from "../organisms/Modal_ProjectInfo.mjs";
import { Organism_ProjectInfo } from "../organisms/Organism_ProjectInfo.mjs";

export function Template_Projects_View ( view )
{

    Component.call( this );

    this.getHtml = function ()
    {
        return `
        <div class="grid-template-projects">
            ${slot("organismNavbar")}
            <div class="organism_btn-filled-pictures">
                ${slot( "organismButtonFilledPictures")}
                <div id="modal-projectInfo"></div>
            </div>
            
        </div>`;
    };

    // ${slot("projInfoModal")}

    

    this.bindScript = function ()
    {
        let model = State.views[ view ].components;

        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        this.fillSlot("organismNavbar", organismNavbar.getElement())

        let organismButtonFilledPictures = new Organism_ButtonFilledPictures( model.Organism_ButtonFilledPictures );

        this.fillSlot( "organismButtonFilledPictures", organismButtonFilledPictures.getElement() );

        // let projInfoModal = new Modal_ProjectInfo(model.content)
        // this.fillSlot("projInfoModal", projInfoModal.getElement())

        // let projInfoModal = new Organism_ProjectInfo(model.organism_projectInfo)
        // this.fillSlot("projInfoModal", projInfoModal.getElement())

        this.getElement().querySelector("div.molecule_image-and-text").addEventListener("click", (e) => {
            console.log('btn-project button pressed')      
            const modalProjInfo = document.getElementById('modal-projectInfo')
            
            modalProjInfo.innerHTML = `
                ${slot("new-modal")}
            `
            this.modal = new Modal_ProjectInfo(model.content)

            this.fillSlot("new-modal", this.modal.getElement());
        });


    };
}