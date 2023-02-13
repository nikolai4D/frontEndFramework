import { Component } from "../../../core/Component.mjs";
import { slot } from "../../../core/helpers.mjs";
import { Atom_Image } from "../atoms/Atom_Image.mjs";
import { Atom_Text1 } from "../atoms/Atom_Text1.mjs";
import { Modal_ProjectInfo } from "../organisms/Modal_ProjectInfo.mjs";

export function Molecule_ImageAndText ( model )
{
    Component.call( this );

    this.getHtml = function ()
    {

        return `
            <div class="molecule_image-and-text">
                    ${ slot( "img" ) }
                    ${ slot( "text1" ) }
                <div id="modal-projectInfo"></div>
            </div>
        `;
    };

    this.bindScript = function ()
    {
        let img = new Atom_Image( model.atom_img );
        let text1 = new Atom_Text1( model.atom_text1 );
        this.fillSlot( "img", img.getElement() );
        this.fillSlot( "text1", text1.getElement() );


        this.getElement().querySelectorAll("div.molecule_image-and-text").addEventListener("click", (e) => {
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