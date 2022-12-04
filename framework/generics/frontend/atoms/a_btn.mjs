import {_component} from "../../../core/component.mjs";

export function a_btn(text, onCLick){
    const btn = Object.assign({}, _component, _button)
    btn.text = text
    btn.onClick = onCLick

    return btn
}

const _button = {
    getHTML: function() {
        return `
        <button>${this.text}</button>`
    },

    bindScript: function() {
        this.element.addEventListener("click", this.onClick)
    },

    onClick: function() {
        console.log("a_btn click")
    }
}