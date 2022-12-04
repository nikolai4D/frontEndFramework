import {_component} from "../../../core/component.mjs";

export function a_textInput(type, placeholder){
    const input = Object.assign({}, _component, _textInput)
    input.type = type
    input.placeholder = placeholder

    return input
}


const _textInput = {
    getHTML: function() {
        return `
        <input type="${this.type}" placeholder="${this.placeholder}">
        `
    }


}