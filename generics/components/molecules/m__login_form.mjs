import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { a_ButtonPositive } from "../atoms/A_ButtonPositive.mjs";
import { A_input } from "../atoms/a_Input.mjs";

export function m_LoginForm(model) {
    Component.call(this)

    this.props = {
        atom_input: new A_input().props,
        atom_buttonPositive: new a_ButtonPositive().props
    }

    console.log( this.props, "M_LoginForm")

    this.getHtml = function() {

        return `
            <div class="molecule_login-form">
            ${slot("input")}
            ${slot("button-positive")}
            </div>
        `
    }

    this.bindScript= function() {
        let input = new A_input(model.atom_input)
        let buttonPositive = new a_ButtonPositive(model.atom_buttonPositive)
        this.fillSlot("input", input.getElement());
        this.fillSlot("button-positive", buttonPositive.getElement());
    }


  
}