import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";
import { Organism_ProcessModal } from "./Organism_ProcessModal.mjs";

export function Modal_ProcessListAll(model) {
    Component.call(this)

    this.content = model.content;
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
            </div>
        </div>
        `
    }

    this.bindScript= function() {
        this.content = new Organism_ProcessModal(model.organism_processModal)
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