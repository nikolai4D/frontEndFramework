import {slot} from "../../../core/helpers.mjs";
import {_component} from "../../../core/component.mjs";


export function o_modal(content) {
    const modal = Object.assign({}, _component, _modal)
    modal.content = content

    return modal
}


const _modal = {

    getHTML: function() {
        return `
        <div class="modal">
                ${slot("content")}
        </div>
        `
    },

    bindScript: function() {
        this.fillSlot("content", this.content.getElement())

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
    },

    show: function() {
        document.body.append(this.getElement())
    }

}