import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Heading6(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <h6 class="atom_heading6">${model.text}</h6>
                `
    }

    this.bindScript= function() {

    }

}