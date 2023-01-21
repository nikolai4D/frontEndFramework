import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Heading6() {
    Component.call(this)

    this.getHtml = function() {

        return `
                <h6 class="atom_heading6">Atom_Heading6</h6>
                `
    }

    this.bindScript= function() {

    }

}