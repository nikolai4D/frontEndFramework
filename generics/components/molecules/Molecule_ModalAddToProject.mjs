import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_AddToProject } from "../organisms/Organism_AddToProject.mjs";

export function Molecule_ModalAddToProject(model) {
  Component.call(this);

  this.content = model.content;
  this.modal = null;

  this.getHtml = function () {
    return `
        <div class="modal-container mod-addToProj">
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
    
    this.content = new Organism_AddToProject(model.organism_addToProject)
    this.fillSlot("content", this.content.getElement());
    
    this.getElement().querySelector(".bi-x").addEventListener("click", () => {
      document.querySelectorAll('.modal')[0].remove()
      });
      
    // this.primary.getElement().addEventListener("click", () => {
    //   document.querySelectorAll('.modal')[0].remove()
    // });
  };
}