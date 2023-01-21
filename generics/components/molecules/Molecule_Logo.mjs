import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";


export function Molecule_Logo() {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_logo">
                <div class="">
                    ${slot("icon")}
                    ${slot("heading1")}
                </div>
            </div>
        `
    }

    this.bindScript= function() {

    }

}