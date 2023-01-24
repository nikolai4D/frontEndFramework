import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Heading3(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <h3 class="atom_heading3 card_heading3">${model.heading}</h3>
                `
    }

    this.bindScript= function() {

    }

}