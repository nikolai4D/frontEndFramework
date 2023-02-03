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
                ${slot("button-neutral")}
                ${slot("button-positive")}
            </div>
        `
    }

    this.bindScript= function() {
        let buttonPositive = new Atom_ButtonPositive(model.atom_buttonPositive)
        let buttonNeutral = new Atom_ButtonNeutral(model.atom_buttonNeutral)
        this.fillSlot("button-positive", buttonPositive.getElement());
        this.fillSlot("button-neutral", buttonNeutral.getElement());
    }

}