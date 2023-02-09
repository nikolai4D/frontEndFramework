import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";
import { Atom_ButtonPositive} from "../atoms/Atom_ButtonPositive.mjs"
import { Organism_SearchResultDetail } from "./Organism_SearchResultDetail.mjs";
import { Modal } from "./Modal.mjs"
import { Paragraph } from "../atoms/Paragraph.mjs";


export function Modal_SearchResultDetail(model) {
    Component.call(this)

    this.content = model.content
    this.modal = null;
    // this.content.modal = null;
    

    // this.content.modal = this;

    this.getHtml = function() {
        return `
        <div class="modal">
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
        </div>
        
        `
    }

    this.bindScript= function() {

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

        this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)

        let atom_btnPositive = new Atom_ButtonPositive(model.atom_buttonPositive)

        this.fillSlot("content", this.content.getElement())
        this.fillSlot("atom_btnPositive", atom_btnPositive.getElement());

        this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
            document.querySelectorAll('.modal-container')[0].remove()
            console.log('cross button pressed')
        });

        

        this.getElement().querySelector(".org_searh_res_det_btn").addEventListener("click", (e) => {
            console.log('btn-project button pressed')
      
            const modalId = document.getElementById('modal-id')
      
            modalId.innerHTML = `
                ${slot("new-modal")}
            `
            this.modal = new Modal(
              this.paragrap = new Paragraph("Testing")
            )
            this.fillSlot("new-modal", this.modal.getElement());
        });
    }

    this.show= function() {
        document.body.append(this.getElement())
    }
}