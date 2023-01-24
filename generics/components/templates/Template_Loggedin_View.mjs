import { Component } from "../../../core/Component.mjs";
import { slot } from "../../../core/helpers.mjs";
import { State } from "../../../core/actions/State.mjs";
import { Molecule_HeaderAndText } from "../molecules/Molecule_HeaderAndText.mjs";
import { Organism_SideBar } from "../organisms/Organism_SideBar.mjs";

export function Template_Loggedin_View ( view )
{
    Component.call( this );

    this.getHtml = function ()
    {

        return `
            <div class="grid grid__c3r3 template_start">
                <div class="grid-placement__c1r1-3">
                    ${ slot( "sideBar" ) }
                </div>
                <div class="grid-placement__c2-3r2">
                    ${ slot( "loggedInHeaderAndText" ) }
                </div>
            </div>
        `;
    };

    this.bindScript = function ()
    {
        let model = State.views[ view ].components;
        let molecule_headerAndText = new Molecule_HeaderAndText( model.molecule_headerAndText );
        let organism_SideBar = new Organism_SideBar( model.organism_SideBar );

        this.fillSlot( "loggedInHeaderAndText", molecule_headerAndText.getElement() );
        this.fillSlot( "sideBar", organism_SideBar.getElement() );
    };
}