import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_SearchResultDetail } from "../organisms/Organism_SearchResultDetail.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";
import { Modal_SearchResultDetail } from "../organisms/Modal_SearchResultDetail.mjs";
import { Organism_AddToProject } from "../organisms/Organism_AddToProject.mjs"

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
                <div id="modal-id" class="modal"></div>
        </div>
      `;
  };
 
  this.bindScript = function () {

    this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)

    let atom_btnPositive = new Atom_ButtonPositive(model.atom_buttonPositive)

    this.fillSlot("content", this.content.getElement());
    this.fillSlot("atom_btnPositive", atom_btnPositive.getElement());

    this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
      document.querySelectorAll('.modal-container')[0].remove()
    });

    this.getElement().querySelector(".org_searh_res_det_btn").addEventListener("click", (e) => {

      const modalId = document.getElementById('modal-id')

      modalId.innerHTML = `
          ${slot("new-modal")}
      `
      
      this.modal = new Modal_SearchResultDetail(
        this.modal = new Organism_AddToProject(model.organism_addToProject)
      )

      this.fillSlot("new-modal", this.modal.getElement());
      });
  };

}
