import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";

export function Atom_Icon() {
    Component.call(this)

    this.getHtml = function() {

        return `
                <# class="atom_icon">#</i>
            `
    }

    this.bindScript= function() {

    }

}