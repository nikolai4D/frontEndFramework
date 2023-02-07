import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_SearchResultDetail } from "../organisms/Organism_SearchResultDetail.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";
import { Molecule_ModalFrame } from "../molecules/Molecule_ModalFrame.mjs"

export function Molecule_ModalSearchResultDetail(model) {
  Component.call(this);

  this.content = model.content;
  this.modal = null;

  this.getHtml = function () {
    return `
        <div class="modal-container">
                <div class="modal-title-section">
                    <div class="search-res-det-upper-section">
                        <i class="bi bi-x"></i>
                    </div>
                </div> 
                    ${slot("content")}
                <div class="btn-project">
                    ${slot("btn-project")}
                </div>
        </div>
      `;
  };
  
  this.bindScript = function () {

    this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)

    let button = new Atom_ButtonPositive(model.atom_button)

    this.fillSlot("content", this.content.getElement());
    this.fillSlot("btn-project", button.getElement());
    
    this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
      // document.querySelectorAll('.modal')[0].remove()
      console.log('cross button pressed')
      });

    this.getElement().querySelector(".btn-project").addEventListener("click", (e) => {
      console.log('btn-project button pressed')
      this.content = new Molecule_ModalFrame(model.content)

      });
  };
}
