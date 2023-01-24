import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Icon } from "nd_frontend/generics/components/atoms/Atom_Icon.mjs";
import { Atom_ButtonNeutral } from "../atoms/Atom_ButtonNeutral.mjs"
import { Atom_Text1 } from "nd_frontend/generics/components/atoms/Atom_Text1.mjs";

export function NavBar(model){
    Component.call(this)

    this.getHtml = function(){

        return `
        <nav class="organism_navbar">
                <div class="logo_and_name">
                ${slot('logo')}
                ${slot('ucTxt')}
                </div>
                <div class="logout_user_btn">
                ${slot('text')}
                ${slot('btn')}
                </div>
        </nav>
        `
    }


    this.bindScript = function(){
        let logo = new Atom_Icon(model.logo)
        let ucText = new Atom_Text1(model.atom_ucText)
        let userText = new Atom_Text1(model.atom_userText)
        let btn = new Atom_ButtonNeutral(model.atom_btn)

        this.fillSlot("logo", logo.getElement())
        this.fillSlot("ucTxt", ucText.getElement())
        this.fillSlot("btn", btn.getElement())
        this.fillSlot("text", userText.getElement())
    }

}