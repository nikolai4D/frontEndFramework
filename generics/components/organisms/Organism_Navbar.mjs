import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Link} from "../atoms/Link.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { Button } from "../atoms/Button.mjs";
import { Atom_Heading4 } from "../atoms/Atom_Heading4.mjs";

// routesMap, router, model

export function Organism_Navbar(model){
    Component.call(this)

    // this.routesMap = routesMap

    this.getHtml = function(){

        let links = ""
        // for (let i of this.routesMap.keys()){
        //     links += "<li>" + slot(i) + "</li>"
        // }

        return `
        <nav>
            <div class="">
                ${slot("logo")}
            </div>
            <ul>
                ${links}
            </ul>
            <div class="">
                ${slot("user")}
                ${slot("logutBtn")}
            </div>
        </nav>
        `
    }


    this.bindScript = function(){
        
        let logo = new Molecule_Logo(model.molecule_logo)
        let user = new Atom_Heading4(model.atom_heading4)
        let logoutBtn = new Button(model.atom_button)
        
        this.fillSlot("logo", logo.getElement());
        // for (let i of this.routesMap){
        //     let link = new Link(i[0], i[1], router)
        //     this.fillSlot(i[0], link.getElement())
        // }
        this.fillSlot("user", user.getElement());
        this.fillSlot("logoutBtn", logoutBtn.getElement());
    }

}