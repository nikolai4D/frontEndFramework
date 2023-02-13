import {Component} from "../../../core/Component.mjs";

export function o_Modal(content) {
    Component.call(this)

    this.subComponents = {
        content: null,
    }

    this.getHtml = function() {
        return `
        <div class="modal">
            ${this.slot(this.subComponents.content)}
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

        this.subComponents.content.getElement().style.backgroundColor = "white"

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