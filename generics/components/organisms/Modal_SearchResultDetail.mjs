import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";
import { Atom_ButtonPositive} from "../atoms/Atom_ButtonPositive.mjs"
import { Organism_SearchResultDetail } from "./Organism_SearchResultDetail.mjs";
import { Modal } from "./Modal.mjs"
import { Organism_AddToProject } from "./Organism_AddToProject.mjs";



export function Modal_SearchResultDetail(model) {
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

        this.content = new Organism_SearchResultDetail(model.organism_searchResultDetail)

        let atom_btnPositive = new Atom_ButtonPositive(model.atom_buttonPositive)

        this.fillSlot("content", this.content.getElement())
        this.fillSlot("atom_btnPositive", atom_btnPositive.getElement());

        this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
            document.querySelectorAll('.modal-container')[0].remove()
            console.log('cross button pressed')
            const modalBg = document.getElementById('modal-background')
            modalBg.style.removeProperty('background-color')

        });

        this.getElement().querySelector(".org_searh_res_det_btn").addEventListener("click", (e) => {
            console.log('second modal btn-project pressed')
      
            const modalIdSecond = document.getElementById('modal-id-second')
            console.log(modalIdSecond)
      
            modalIdSecond.innerHTML = `
                ${slot("second-modal")}
            `
            this.modal = new Modal(
              this.content = new Organism_AddToProject(model.organism_addToProject)
            )

            console.log(modalIdSecond, "modelId")
            console.log(this.modal, "this.modal")
            this.fillSlot("second-modal", this.modal.getElement());
        });

        const mStyle = this.getElement().style
        mStyle.position = "absolute"
        // mStyle.width = window.innerWidth + "px"
        mStyle.width = "100vw"
        // mStyle.height = window.innerHeight + "px"
        mStyle.height = "100vh"
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