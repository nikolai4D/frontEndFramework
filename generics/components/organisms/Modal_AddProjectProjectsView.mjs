import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";
import { Organism_BtnPositiveAddToProject } from "./Organism_btnPositiveAddToProject.mjs";


export function Modal_AddProjectProjectsView(model) {
    Component.call(this)

    this.content = model.content;
    this.modal = null;

    this.getHtml = function() {
        return `
        <div id="modal-background" class="modal">
            <div class="modal-container modal-btn_project-inner-wrap">
                <div class="modal-process-section">
                    <div class="modal-process-upper-section">
                        <i class="bi bi-x"></i>
                    </div>
                </div> 
                ${slot("content")}
            </div>
        </div>
        `
    }

    this.bindScript= function() {
        this.content = new Organism_BtnPositiveAddToProject(model.organism_btn_positive_add_proj)
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