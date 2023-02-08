import {Component} from "../../../core/Component.mjs";


export function t_Central() {
    Component.call(this)

    this.getHtml = function() {
        return `
        <div>
            ${slot("central")}
        </div>
        `
    }
}