import {_view} from "../../../../framework/core/view.mjs";
import t_central from "../../../../framework/generics/frontend/templates/t_central.js";
import {o_loginForm} from "../../../../framework/generics/frontend/organisms/o_loginForm.mjs";
import {router} from "../../index.mjs";

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
            ()=> {
                router.goTo("guardedByModal")
            },
            "Username",
            "Password"
    ))


    return view
}