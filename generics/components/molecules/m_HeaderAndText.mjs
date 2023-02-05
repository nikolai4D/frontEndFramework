import {Component} from "../../../core/Component.mjs";
import {a_Heading} from "../atoms/a_Heading.mjs";
import {a_Paragraph} from "../atoms/a_Paragraph.mjs";

export function m_HeaderAndText() {
    Component.call(this)

    this.subComponents = {
        heading: new a_Heading(),
        text: new a_Paragraph(),
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