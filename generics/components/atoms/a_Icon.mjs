import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function a_Icon(options) {
    Component.call(this)

    this.options = {
        icon: options.icon,
    }

    this.getHtml = function() {

        return `
                <i class="${this.options.icon} atom_icon"></i>
            `
    }

    this.bindScript= function() {

    }

}