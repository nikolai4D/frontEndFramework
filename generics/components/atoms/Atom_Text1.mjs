import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Text1() {
    Component.call(this)

    this.getHtml = function() {

        return `
                <p class="atom_text1">Atom_Text1</p>
                `
    }

    this.bindScript= function() {

    }

}