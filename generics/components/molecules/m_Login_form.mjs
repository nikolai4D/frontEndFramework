import {Component} from "../../../core/Component.mjs";


export function m_LoginForm(options) {
    Component.call(this)

    this.subComponents = {
        input: null,
        button: null,
    }

    console.log( this.props, "M_LoginForm")

    this.getHtml = function() {

        return `
            <div class="molecule_login-form">
                ${this.slot(this.subComponents.input)}
                ${this.slot(this.subComponents.button)}
            </div>
        `
    }
  
}