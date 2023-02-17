import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Organism_ListAll } from "../organisms/Organism_ListAll.mjs";

export function Template_ListAllInformation_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("organismNavbar")}
        ${slot("organismListAll")}
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        let organism_listAll = new Organism_ListAll(model.organism_listAll)

        this.fillSlot("organismNavbar", organismNavbar.getElement())
        this.fillSlot("organismListAll", organism_listAll.getElement())
    }
}