import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { Atom_Heading4 } from "nd_frontend/generics/components/atoms/Atom_Heading4.mjs"
import { slot } from "nd_frontend/core/helpers.mjs";

export function Template_Search_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("atomHeader")}
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let atom_heading4 = new Atom_Heading4(model.atom_heading4)

        this.fillSlot("atomHeader", atom_heading4.getElement())
    }
}