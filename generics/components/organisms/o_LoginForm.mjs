import {Component} from "../../../core/Component.mjs";


export function o_LoginForm(options){
    Component.call(this)

    this.subComponents = {
        username: null,
        password: null,
        submitBtn: null,
    }

    this.getHtml = function() {
        return `
        <div>
            <h1>Login</h1>
            <div>
                ${this.slot(this.subComponents.username)}
                ${this.slot(this.subComponents.password)}
                ${this.slot(this.subComponents.submitBtn)}
            </div>
        </div>`
    }

}

