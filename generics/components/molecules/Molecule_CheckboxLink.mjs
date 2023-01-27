import { slot } from "../../../core/helpers.mjs";
import { Component } from "../../../core/Component.mjs";
import { Atom_Input } from "../atoms/Atom_Input.mjs";
import { Atom_Text2Link } from "../atoms/Atom_Text2Link";

export default function ( model )
{
    Component.call( this );

    this.getHtml = function ()
    {
        return `
        <div>
        ${ slot( "input" ) }
        ${ slot( "paragraphLink" ) }
        </div>
        `;
    };

    this.bindScript = function ()
    {
        let input = new Atom_Input( model.atom_input );
        let paragraph = new Atom_Text2Link( model.atomLink_input );
        this.fillSlot( "input", input.getElement() );
        this.fillSlot( "paragraphLink", paragraph.getElement() );
    };

    this.getValue = function ()
    {
        return input.getElement().value;
    };
}