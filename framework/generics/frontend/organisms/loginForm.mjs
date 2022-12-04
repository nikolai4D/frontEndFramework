import {slot} from "../../../core/helpers.mjs";
import {button} from "../atoms/button.mjs";
import {textInput} from "../atoms/textInput.js";
import {inputField} from "../molecules/textInputField.js";
import {_component} from "../../../core/component.mjs";

export function loginForm(onSubmit, idLabel, passwordLabel){
    const form = Object.assign({}, _component, _loginForm)
    form.onSubmit = onSubmit
    form.idLabel = idLabel
    form.passwordLabel = passwordLabel

    return form
}

const _loginForm = {

    getTemplate: async function() {
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

    bindScript: async function() {
        let username = inputField(
                            this.idLabel,
                            textInput(
                                "text",
                                "username")
        ),
            password = inputField(
                            this.passwordLabel,
                            textInput(
                                "password",
                                "password")
        ),
            submitBtn = button(
                            "Login",
                            this.onSubmit)


        await this.fillSlots(new Map([
            ["username", await username.getElement()],
            ["password", await password.getElement()],
            ["submitBtn", await submitBtn.getElement()]
        ]))
    }
}

