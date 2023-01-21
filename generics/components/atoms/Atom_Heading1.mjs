import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Heading1() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="atom_heading1">
                <h1>Atom_Heading1</h1>
            </div>
        `
    }

    this.bindScript= function() {

    }

}