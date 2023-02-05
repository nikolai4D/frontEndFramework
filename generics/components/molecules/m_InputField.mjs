import {Component} from "../../../core/Component.mjs";

export default function(options) {
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
            ${this.slot("input")}
        </div>
        `
    }

    this.getValue= function() {
        return this.input.getElement().value
    }
}