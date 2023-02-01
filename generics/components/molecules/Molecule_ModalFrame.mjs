import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";

export function ModalFrame(model) {
  Component.call(this);

  this.content = model.content;
  this.modal = null;

  this.primary = model.primaryButton
  this.secondary = model.secondaryButton

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
                      ${slot("secondary")}
                    </div>
        </div>
      `;
  };
  
  this.bindScript = function () {
    this.fillSlot("primary", this.primary.getElement());
    this.fillSlot("secondary", this.secondary.getElement());
    this.fillSlot("content", this.content.getElement());
    
    this.getElement().querySelector(".bi-x").addEventListener("click", () => {
      document.querySelectorAll('.modal')[0].remove()
      });
      
    this.primary.getElement().addEventListener("click", () => {
      document.querySelectorAll('.modal')[0].remove()
    });
  };
}
