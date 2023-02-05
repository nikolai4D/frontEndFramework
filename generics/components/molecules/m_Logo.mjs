import {Component} from "../../../core/Component.mjs";

export function m_Logo(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="molecule_logo">
                    ${this.slot(this.subComponents.icon)}
                    ${this.slot(this.subComponents.heading)}
            </div>
        `
    }
}