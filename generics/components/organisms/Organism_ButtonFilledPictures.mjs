import { Component } from "../../../core/Component.mjs";
import { slot } from "../../../core/helpers.mjs";
import { Molecule_ImageAndText } from "../molecules/Molecule_ImageAndText.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";

export function Organism_ButtonFilledPictures ( model )
{
    Component.call( this );

    this.getHtml = function ()
    {

        return `
            <div class="__">
            ${ slot( "btn" ) }
                <div class="___">
                    ${ ( model.cards.map( ( card, index ) => slot( "card" + index ) ) ).join( "" ) }
                </div>
            </div>
        `;
    };

    this.bindScript = function ()
    {
        model.cards.forEach( ( card, index ) =>
        {
            let btn = new Atom_ButtonPositive( model.btn );
            let card = new Molecule_ImageAndText( model.molecule_imgText );
            this.fillSlot( "card" + index, card.getElement() );
            this.fillSlot( "btn", btn.getElement() );
        } );
    };
}