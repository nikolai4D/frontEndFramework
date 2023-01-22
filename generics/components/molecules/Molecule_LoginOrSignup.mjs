import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";
import { Atom_Text1 } from "../atoms/Atom_Text1.mjs";
import { Atom_ButtonNeutral } from "../atoms/Atom_ButtonNeutral.mjs";

export function Molecule_LoginOrSignup(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_login-or-signup">
            ${slot("button-positive")}
            ${slot("text1")}
            ${slot("button-neutral")}
            </div>
        `
    }

    this.bindScript= function() {
        let buttonPositive = new Atom_ButtonPositive(model.atom_buttonPositive)
        let text1 = new Atom_Text1(model.atom_text1)
        let buttonNeutral = new Atom_ButtonNeutral(model.atom_buttonNeutral)
        this.fillSlot("button-positive", buttonPositive.getElement());
        this.fillSlot("text1", text1.getElement());
        this.fillSlot("button-neutral", buttonNeutral.getElement());
    }

}