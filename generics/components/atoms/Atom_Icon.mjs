import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Icon(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
                <i class="${model.icon} atom_icon"></i>
            `
    }

    this.bindScript= function() {

    }

}