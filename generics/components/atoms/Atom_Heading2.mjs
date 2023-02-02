import {Component} from "../../../core/Component.mjs";

export function Atom_Heading2 (model){
    Component.call(this)

    this.getHtml = function(){
        return `
            <h2 class="atom_heading2">${model.text}</h2>
        `
    }

}