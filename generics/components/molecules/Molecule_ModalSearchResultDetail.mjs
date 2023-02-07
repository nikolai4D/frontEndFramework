import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_SearchResultDetail } from "../organisms/Organism_SearchResultDetail.mjs";

export function Molecule_ModalSearchResultDetail(model) {
  Component.call(this);

  this.content = model.content;
  this.modal = null;

  this.getHtml = function () {
    return `
        <div class="modal-container">
                <div class="modal-title-section">
                    <div class="upper-section">
                        <i class="bi bi-x"></i>
                    </div>
                </div> 
                    ${slot("content")}
        </div>
      `;
  };
  
  this.bindScript = function () {

    this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)

    this.fillSlot("content", this.content.getElement());
    
    this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
      if(e.target === this.getElement()){
        console.log('pressing button')
        // this.getElement().remove
        document.querySelectorAll('.modal')[0].remove()
      }
      
      });
  };

  this.show = function() {
    document.body.append(this.getElement())
  }
}
