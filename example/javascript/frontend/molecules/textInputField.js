import {slot} from "../../../../framework/core/helpers.mjs";
import {_component} from "../../../../framework/core/component.mjs";

export function inputField(label, input){
    const field = Object.assign({}, _component, _textInputField)
    field.label = label
    field.input = input

    return field
}

const _textInputField = {
    getTemplate: async function() {
        return `
        <div>
            <label>${this.label}</label>
            ${slot("input")}
        </div>
        `
    },

    bindScript: async function() {
        await this.fillSlot("input", await this.input.getElement())
    }
}