import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Heading4() {
    Component.call(this)

    this.getHtml = function() {

        return `
                <h4 class="atom_heading4">Atom_Heading4</h4>
                `
    }

    this.bindScript= function() {

    }

}