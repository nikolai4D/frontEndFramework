import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Organism_Navbar } from "../organisms/Organism_Navbar.mjs"
import { Organism_ListAll } from "../organisms/Organism_ListAll.mjs";
import { Organism_ListDetailInformation } from "nd_frontend/generics/components/organisms/Organism_ListDetailsInformation.mjs";
import { Button } from "nd_frontend/generics/components/atoms/Button.mjs";
import { Atom_ButtonPositive } from "nd_frontend/generics/components/atoms/Atom_ButtonPositive.mjs";
import { Modal } from "nd_frontend/generics/components/organisms/Modal.mjs";

export function Template_ListAllInformation_View(view){

    Component.call(this)

    this.getHtml = function(){
        return `<div>
            ${slot("organismNavbar")}
            ${slot("organismListAll")}                    
        </div>
        `
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let organismNavbar = new Organism_Navbar(model.organism_navbar)
        let organism_listAll = new Organism_ListAll(model.organism_listAll)

        this.fillSlot("organismNavbar", organismNavbar.getElement())
        this.fillSlot("organismListAll", organism_listAll.getElement())



        organism_listAll.getElement().addEventListener("click", function(e){
            let informationDetailModal = new Organism_ListDetailInformation(model.informationDetailModal);
            let modal = new Modal(informationDetailModal);
            modal.show();
        })
    }
}