import { Component } from 'nd_frontend/core/Component.mjs';
import { slot } from 'nd_frontend/core/helpers.mjs';
import { Atom_Icon } from "nd_frontend/generics/components/atoms/Atom_Icon.mjs";
import { Link } from "nd_frontend/generics/components/atoms/Link.mjs";

export function Organism_SideBar ( model )
{
    Component.call( this );
    this.getHtml = function ()
    {
        return `
        <div class="organism_Sidebar">
            <div>
                ${ slot( "searchIcon" ) }
                ${ slot( "searchLink" ) }
            </div>
            <div>
                ${ slot( "projectsIcon" ) }
                ${ slot( "projectsLink" ) }
            </div>
            <div>
                ${ slot( "adminIcon" ) }
                ${ slot( "adminLink" ) }
            </div>
        </div>
        `;
    };

    this.bindScript = function ()
    {
        let searchIcon = new Atom_Icon( model.searchIcon );
        let searchLink = new Link( model.searchText );
        let projectsIcon = new Atom_Icon( model.projectsIcon );
        let projectsLink = new Link( model.projectsText );
        let adminIcon = new Atom_Icon( model.adminIcon );
        let adminLink = new Link( model.adminText );
        this.fillSlot( "searchIcon", searchIcon.getElement() );
        this.fillSlot( "searchLink", searchLink.getElement() );
        this.fillSlot( "projectsIcon", projectsIcon.getElement() );
        this.fillSlot( "projectsLink", projectsLink.getElement() );
        this.fillSlot( "adminIcon", adminIcon.getElement() );
        this.fillSlot( "adminLink", adminLink.getElement() );
    };
}