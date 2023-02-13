import {Component} from "../../../core/Component.mjs";

export function m_InputField(model){
    Component.call(this)

    this.options = {
        label: "input",
    }

    this.subComponents = {
        input: null,
    }

    this.getHtml = function() {
        return `
        <div>
            <label>${this.options.label}</label>
            ${this.slot(this.subComponents.input)}
        </div>
        `
    }

    this.getValue= function() {
        return this.input.getElement().value
    }
}