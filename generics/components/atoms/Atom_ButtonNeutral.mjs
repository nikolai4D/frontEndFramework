import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_ButtonNeutral() {
    Component.call(this)

    this.getHtml = function() {

        return `
                <button class="atom_button-neutral">Atom_ButtonNeutral</button>
                `
    }

    this.bindScript= function() {

    }

}