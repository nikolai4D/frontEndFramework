import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Molecule_IconAndLink } from "../molecules/Molecule_IconAndLink.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { Molecule_TextAndButton } from "../molecules/Molecule_TextAndButton.mjs";

export function Organism_Navbar(model){
    Component.call(this)

    this.getHtml = function(){

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
                ${slot("textAndBtn")}
        </nav>
        `
    }

    this.bindScript = function(){
        
        let logo = new Molecule_Logo(model.molecule_logo)
        let textAndBtn = new Molecule_TextAndButton(model.molecule_textAndButton)

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
        this.fillSlot("textAndBtn", textAndBtn.getElement());
    }
}