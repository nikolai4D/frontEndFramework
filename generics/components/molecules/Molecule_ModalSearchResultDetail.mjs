import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_SearchResultDetail } from "../organisms/Organism_SearchResultDetail.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";
import { Modal } from "../organisms/Modal.mjs"
import { Paragraph } from "../atoms/Paragraph.mjs"

export function Molecule_ModalSearchResultDetail(model) {
  Component.call(this);

  this.content = model.content;
  this.modal = null;

  this.getHtml = function () {
    return `
        <div class="modal-container modal-search-res-det">
                <div class="modal-title-section">
                    <div class="modal-search-res-det-upper-section">
                        <i class="bi bi-x"></i>
                    </div>
                </div> 
                    ${slot("content")}
                <div class="org_searh_res_det_btn">
                    ${slot("atom_btnPositive")}
                </div>
                <div class="modal">
                  ${slot("new-modal")}
                </div>

        </div>
      `;
  };
  
  this.bindScript = function () {

    this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)

    let atom_btnPositive = new Atom_ButtonPositive(model.atom_buttonPositive)

    this.fillSlot("content", this.content.getElement());
    this.fillSlot("atom_btnPositive", atom_btnPositive.getElement());


 
    
    this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
      // document.querySelectorAll('.modal')[0].remove()
      console.log('cross button pressed')
      });

    this.getElement().querySelector(".org_searh_res_det_btn").addEventListener("click", addModal)

      function addModal() {
        console.log('btn-project button pressed')
        
        this.modal = new Modal(
          this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)
        )
        this.fillSlot("new-modal", this.modal.getElement());
      };
  };
}
