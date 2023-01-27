import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Button } from "../atoms/Button.mjs";
import { Atom_Text1} from "../atoms/Atom_Text1.mjs";

export function Molecule_TextAndButton(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div>
            ${slot("user")}
            ${slot("button")}
            </div>
        `
    }

    this.bindScript= function() {
        let user = new Atom_Text1(model.atom_text1)
        let button = new Button(model.atom_button)
        this.fillSlot("user", user.getElement());
        this.fillSlot("button", button.getElement());
    }

}