import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Text1(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <p class="atom_text1">${model.text}</p>
                `
    }

    this.bindScript= function() {

    }

}