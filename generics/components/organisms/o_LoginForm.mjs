import {Component} from "../../../core/Component.mjs";
import {a_Button} from "../atoms/a_Button.mjs";


export function O_LoginForm(options){
    Component.call(this)

    this.subComponents = {
        id: null,
        password: null,
    }

    this.getHtml = function() {
        return `
        <div>
            <h1>Login</h1>
            <div>
                ${this.slot("username")}
                ${this.slot("password")}
                ${this.slot("submitBtn")}
            </div>
        </div>`
    }

}

