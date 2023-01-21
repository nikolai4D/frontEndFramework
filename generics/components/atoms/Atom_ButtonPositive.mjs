import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_ButtonPositive() {
    Component.call(this)

    this.getHtml = function() {

        return `
                <button class="atom_button-positive">Atom_ButtonPositive</button>
                `
    }

    this.bindScript= function() {

    }

}