import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_ButtonFilledPictures } from "../organisms/Organism_ButtonFilledPictures.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"

export function Template_Projects_View ( view )
{

    Component.call( this );

    this.getHtml = function ()
    {
        return `
        <div class="grid-template-projects">
        ${slot("organismNavbar")}
            ${ slot( "organismButtonFilledPictures" ) }
        </div>`;
    };

    this.bindScript = function ()
    {
        let model = State.views[ view ].components;

        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        this.fillSlot("organismNavbar", organismNavbar.getElement())

        let organismButtonFilledPictures = new Organism_ButtonFilledPictures( model.Organism_ButtonFilledPictures );

        this.fillSlot( "organismButtonFilledPictures", organismButtonFilledPictures.getElement() );
    };
}