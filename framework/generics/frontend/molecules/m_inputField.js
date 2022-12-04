import {slot} from "../../../core/helpers.mjs";
import {_component} from "../../../core/component.mjs";

export default function(label, input){
    const field = Object.assign({}, _component, _textInputField)
    field.label = label
    field.input = input

    return field
}

const _textInputField = {
    getHTML: function() {
        return `
        <div>
            <label>${this.label}</label>
            ${slot("input")}
        </div>
        `
    },

    bindScript: function() {
        this.fillSlot("input", this.input.getElement())
    },

    getValue: function() {
        return this.input.getElement().value
    }
}