import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Heading4(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <h4 class="atom_heading4">${model.text}</h4>
                `
    }

    this.bindScript= function() {

    }

}