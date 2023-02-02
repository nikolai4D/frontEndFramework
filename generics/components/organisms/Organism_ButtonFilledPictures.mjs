import { Component } from "../../../core/Component.mjs";
import { slot } from "../../../core/helpers.mjs";
import { Molecule_ImageAndText } from "../molecules/Molecule_ImgAndText.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";

export function Organism_ButtonFilledPictures ( model )
{
    Component.call( this );

    this.getHtml = function ()
    {
        return `
        <div class="organism_buttonFilledPicture_wrapper">
            <div id="organism_buttonFilledPicture_btnParent">
                ${ slot( "btn" ) }
            </div>
            <div class="organism_buttonFilledPicture">
                ${ ( model.cards.map( ( card, index ) => slot( "card" + index ) ) ).join( "" ) }
            </div>
    </div>
        `;
    };

    this.bindScript = function ()
    {
        let btn = new Atom_ButtonPositive( model.btn );
        this.fillSlot( "btn", btn.getElement() );

        model.cards.forEach( ( cardData, index ) =>
        {
            let card = new Molecule_ImageAndText( cardData );
            this.fillSlot( "card" + index, card.getElement() );
        } );
    };
}