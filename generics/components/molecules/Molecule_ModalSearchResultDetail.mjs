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

    // let modal1 = ""
    
    // for (let listIndex in model.lists){
    //     modal1 += `
    //     ${slot('list' + listIndex)}
    //     `
    // }

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
                <div id="modal-id" class="modal"></div>
        </div>
      `;
  };

  // ${slot("new-modal")}
 
  this.bindScript = function () {

    let modal1 = this.fillSlot("new-modal", this.modal.getElement())

    this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)

    let atom_btnPositive = new Atom_ButtonPositive(model.atom_buttonPositive)

    this.fillSlot("content", this.content.getElement());
    this.fillSlot("atom_btnPositive", atom_btnPositive.getElement());

    
    this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
      document.querySelectorAll('.modal-container')[0].remove()
      console.log('cross button pressed')
    });

    this.getElement().querySelector(".org_searh_res_det_btn").addEventListener("click", (e) => {
      console.log('btn-project button pressed')
      // document.querySelectorAll('.modal')[0].add()
      const modalId = document.getElementById('modal-id')

      modalId.innerHTML = `
        <div>
          ${slot("new-modal")}
        </div>
      `
      this.modal = new Modal(
        this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)
      )
      this.fillSlot("new-modal", this.modal.getElement());
      });
  };
  
}
