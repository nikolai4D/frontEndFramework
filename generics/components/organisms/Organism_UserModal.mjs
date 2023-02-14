import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";
import { Atom_ButtonPositive} from "../atoms/Atom_ButtonPositive.mjs"
import { Organism_UserProfileContent } from "nd_frontend/generics/components/organisms/Organism_UserProfileContent.mjs";
export function Organism_UserModal(model) {
  Component.call(this)
  this.content = model.content
  this.modal = null;
  this.getHtml = function() {
    return `
    <div id="modal-background" class="modal">
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
        <div id="modal-id-second" class="modal"></div>
      </div>
    </div>
     
    `
  }
  this.bindScript= function() {
    this.content = new Organism_UserProfileContent(model.organism_userProfileContent)
    let atom_btnPositive = new Atom_ButtonPositive(model.atom_buttonPositive)

    this.fillSlot("content", this.content.getElement())
    this.fillSlot("atom_btnPositive", atom_btnPositive.getElement());
    
    this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
      document.querySelectorAll('.modal-container')[0].remove()
      console.log('cross button pressed')
       
      const modalBg = document.getElementById('modal-background')
      modalBg.style.removeProperty('background-color')
    });
   
    const mStyle = this.getElement().style
    mStyle.position = "absolute"
    mStyle.width = window.innerWidth + "px"
   
    mStyle.height = window.innerHeight + "px"
    mStyle.top = "0px"
    mStyle.left = "0px"
    mStyle.backgroundColor = "rgba(0,0,0,0.5)"
    mStyle.display = "flex"
    mStyle.justifyContent = "center"
    mStyle.alignItems = "center"
    this.content.getElement().style.backgroundColor = "white"
    this.getElement().addEventListener("click", (e)=>{
      if(e.target === this.getElement()){
        this.getElement().remove()
      }
    })
    
  }
  this.show= function() {
    document.body.append(this.getElement())
  }
}