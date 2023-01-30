import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Text2(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <p class="atom_text2">${model.text}</p>
                `
    }

    this.bindScript= function() {

    }

}