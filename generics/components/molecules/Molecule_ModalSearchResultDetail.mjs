import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_SearchResultDetail } from "../organisms/Organism_SearchResultDetail.mjs";

export function Molecule_ModalSearchResultDetail(model) {
  Component.call(this);

  this.content = model.content;
  this.modal = null;

  this.primary = model.primaryButton

  this.getHtml = function () {
    return `
        <div class="modal-container">
                <div class="modal-title-section">
                    <div class="upper-section">
                        <h4 class="modal-title">${model.title}</h4>
                        <i class="bi bi-x"></i>
                    </div>
                </div> 
                <hr>
                    ${slot("content")}
                  
                <hr>
                    <div class="btn-container">
                      ${slot("primary")}
                    </div>
        </div>
      `;
  };
  
  this.bindScript = function () {

    this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)

    this.fillSlot("primary", this.primary.getElement());
    this.fillSlot("content", this.content.getElement());
    
    this.getElement().querySelector(".bi-x").addEventListener("click", () => {
      document.querySelectorAll('.modal')[0].remove()
      });
      
    this.primary.getElement().addEventListener("click", () => {
      document.querySelectorAll('.modal')[0].remove()
    });
  };
}
