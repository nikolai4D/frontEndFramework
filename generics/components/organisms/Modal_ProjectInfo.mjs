import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";
import { Organism_ProjectInfo } from "./Organism_ProjectInfo.mjs";

export function Modal_ProjectInfo(model) {
    Component.call(this)

    this.content = content
    this.content.modal = this;

    this.getHtml = function() {
        return `
        <div class="modal">
                ${slot("content")}
        </div>
        `
    }

    this.bindScript= function() {
        this.content = new Organism_ProjectInfo(model.organism_projectInfo)
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
    }

    this.show= function() {
        document.body.append(this.getElement())
    }
}