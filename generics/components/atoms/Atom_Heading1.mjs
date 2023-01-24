import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Heading1(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <h1 class="atom_heading1">${model.heading}</h1>
                `
    }

    this.bindScript= function() {

    }

}