import {slot} from "../../../core/helpers.mjs";
import {_component} from "../../../core/component.mjs";
import {a_btn} from "../atoms/a_btn.mjs";
import m_inputField from "../molecules/m_inputField.js";
import {a_textInput} from "../atoms/a_textInput.js";

export function o_loginForm(onSubmit, idLabel, passwordLabel){
    const form = Object.assign({}, _component, _loginForm)
    form.onSubmit = onSubmit
    form.idLabel = idLabel
    form.passwordLabel = passwordLabel

    return form
}

const _loginForm = {

    getHTML: function() {
        return `
        <div>
            <h1>Login</h1>
            <div>
                ${slot("username")}
                ${slot("password")}
                ${slot("submitBtn")}
            </div>
        </div>`
    },

    bindScript: function() {
        let username = m_inputField(
                            this.idLabel,
                            a_textInput(
                                "text",
                                "username")
        ),
            password = m_inputField(
                            this.passwordLabel,
                            a_textInput(
                                "password",
                                "password")
        ),
            submitBtn = a_btn(
                            "Login",
                            this.onSubmit)


        this.fillSlots(new Map([
            ["username", username.getElement()],
            ["password", password.getElement()],
            ["submitBtn", submitBtn.getElement()]
        ]))
    }
}

