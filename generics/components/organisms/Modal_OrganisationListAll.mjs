import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";
import { Organism_OrganisationModal } from "./Organism_OrganisationModal.mjs";


export function Modal_OrganisationListAll(model) {
    Component.call(this)

    this.content = model.content;
    this.modal = null;

    this.getHtml = function() {
        return `
        <div id="modal-background" class="modal">
            <div class="modal-container modal-organisation-inner-wrap">
                <div class="modal-org-section">
                    <div class="modal-organisation-upper-section">
                        <i class="bi bi-x"></i>
                    </div>
                </div> 
                ${slot("content")}
            </div>
        </div>
        `
    }

    this.bindScript= function() {
        this.content = new Organism_OrganisationModal(model.organism_organisation_modal)
        this.fillSlot("content", this.content.getElement());

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

        this.getElement().querySelector(".bi-x").addEventListener("click", (e) => {
            document.querySelector('#modal-background').remove()
        });
    }

    this.show= function() {
        document.body.append(this.getElement())
    }
}