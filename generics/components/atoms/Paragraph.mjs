import {Component} from "../../../core/Component.mjs";

export function Paragraph(model) {
    Component.call(this)

    this.getHtml = function() {
        return `<p>${model.text}</p>`
    }
}

// export function Paragraph(text) {
//     Component.call(this)

//     this.getHtml = function() {
//         return `<p>${text}</p>`
//     }
// }