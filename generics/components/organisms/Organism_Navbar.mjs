import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Molecule_IconAndLink } from "../molecules/Molecule_IconAndLink.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { Button } from "../atoms/Button.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs";

// routesMap, router, model

export function Organism_Navbar(model){
    Component.call(this)

    this.getHtml = function(){

        // let links = ""
        // for (let i of model.molecule_iconAndLink){
        //     links += "<li>" + slot(i) + "</li>"
        // }

        return `
        <nav>
            ${slot("logo")}
            <ul>
                ${slot("link1")}
                ${slot("link2")}
                ${slot("link3")}
                ${slot("link4")}
                ${slot("link5")}
            </ul>
            <div class="">
                ${slot("user")}
                ${slot("logoutBtn")}
            </div>
        </nav>
        `
    }


    this.bindScript = function(){
        
        let logo = new Molecule_Logo(model.molecule_logo)
        let user = new Atom_Heading4(model.atom_heading4)
        let logoutBtn = new Button(model.atom_button)

        let link1 = new Molecule_IconAndLink(model.molecule_iconAndLink1)
        let link2 = new Molecule_IconAndLink(model.molecule_iconAndLink2)
        let link3 = new Molecule_IconAndLink(model.molecule_iconAndLink3)
        let link4 = new Molecule_IconAndLink(model.molecule_iconAndLink4)
        let link5 = new Molecule_IconAndLink(model.molecule_iconAndLink5)
        
        this.fillSlot("logo", logo.getElement());
        this.fillSlot("link1", link1.getElement())
        this.fillSlot("link2", link2.getElement())
        this.fillSlot("link3", link3.getElement())
        this.fillSlot("link4", link4.getElement())
        this.fillSlot("link5", link5.getElement())
        this.fillSlot("user", user.getElement());
        this.fillSlot("logoutBtn", logoutBtn.getElement());


        // for (let i of this.routesMap){
        //     let link = new Molecule_IconAndLink(i[0], i[1], router)
        //     this.fillSlot(i[0], link.getElement())
        // }
    }

}