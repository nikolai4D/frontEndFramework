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
            ${ slot( "organismButtonFilledPictures" ) }
            ${slot("projInfoModal")}
        </div>`;
    };

    this.bindScript = function ()
    {
        let model = State.views[ view ].components;

        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        this.fillSlot("organismNavbar", organismNavbar.getElement())

        let organismButtonFilledPictures = new Organism_ButtonFilledPictures( model.Organism_ButtonFilledPictures );

        this.fillSlot( "organismButtonFilledPictures", organismButtonFilledPictures.getElement() );

        let projInfoModal = new Modal_ProjectInfo(model.content)
        this.fillSlot("projInfoModal", projInfoModal.getElement())

        // let projInfoModal = new Organism_ProjectInfo(model.organism_projectInfo)
        // this.fillSlot("projInfoModal", projInfoModal.getElement())

    };
}