import {_component} from "../../../../framework/core/component.mjs";

export function button(text, onCLick){
    const btn = Object.assign({}, _component, _button)
    btn.text = text
    btn.onClick = onCLick

    return btn
}

const _button = {
    getTemplate: async function() {
        return `
        <button>${this.text}</button>`
    },

    bindScript: async function() {
        this.element.addEventListener("click", this.onClick)
    },

    onClick: function() {
        console.log("button click")
    }
}