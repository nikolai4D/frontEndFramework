import {Component} from "../../../core/Component.mjs";


export function t_Central() {
    Component.call(this)

    this.subComponents= {
        central : null,
    }

    this.getHtml = function() {
        return `
        <div>
            ${this.slot(this.subComponents.central)}
        </div>
        `
    }
}