import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_ButtonNeutral(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <button class="atom_button-neutral">${model.text}</button>
                `
    }

    this.bindScript= function() {

    }

}