import {_view} from "../../../../framework/core/view.mjs";
import {a_btn} from "../../../../framework/generics/frontend/atoms/a_btn.mjs";
import t_central from "../../../../framework/generics/frontend/templates/t_central.js";
import {o_loginForm} from "../../../../framework/generics/frontend/organisms/o_loginForm.mjs";

export const r_login = {
    name: "login",
    view: v_login,
    guard: null
}

async function v_login(){
    const view =  Object.assign({}, _view)

    view.title = "Login"

    view.template = t_central(
        o_loginForm(
        ()=> alert(`login function defined from view just got triggered.`),
        "Username",
        "Password"
    ))


    return view
}