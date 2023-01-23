import { Component } from "nd_frontend/core/Component.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { Inputs } from "../molecules/Inputs.mjs"
import { Button } from "nd_frontend/generics/components/atoms/Button.mjs";
import { Header } from "nd_frontend/generics/components/atoms/Header.mjs";

export function Form(data) {
    Component.call(this)

    this.getHtml = function() {
        return `
        <div class="signup-form-container">
            ${slot("header")}
            ${slot("inputs")}
            ${slot("button")}
        </div>`
    }

    this.bindScript= function() {

        const { header, inputs, button } = data;
        const inputsComp = new Inputs(inputs)
        const headerComp = new Header(header)
        const buttonComp = new Button(button)

        this.fillSlot("inputs", inputsComp.getElement())
        this.fillSlot("header", headerComp.getElement())
        this.fillSlot("button", buttonComp.getElement())
    }
}