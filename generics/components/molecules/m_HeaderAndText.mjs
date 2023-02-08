import {Component} from "../../../core/Component.mjs";

export function m_HeaderAndText() {
    Component.call(this)

    this.subComponents = {
        heading: null,
        text: null,
    }

    this.getHtml = function() {

        return `
            <div class="molecule_header-and-text">
                    ${this.slot(this.subComponents.heading)}
                    ${this.slot(this.subComponents.text)}
            </div>
        `
    }

}