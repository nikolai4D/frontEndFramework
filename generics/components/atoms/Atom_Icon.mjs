import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Icon(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <i class="atom_icon">${model.icon}</i>
            `
    }

    this.bindScript= function() {

    }

}