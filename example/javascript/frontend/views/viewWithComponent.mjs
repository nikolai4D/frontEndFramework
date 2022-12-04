import {slot} from "../../../../framework/core/helpers.mjs";
import {loginForm} from "../../../../framework/generics/frontend/organisms/loginForm.mjs";
import {_view} from "../../../../framework/core/view.mjs";
import centralTemplate from "../../../../framework/generics/frontend/templates/centralTemplate.js";

export const viewWithScriptRoute = {
    name: "viewWithScriptRoute",
    view: loginView,
    guard: null
}

function loginView(){
    const view =  Object.assign({}, _view)
    view.template = centralTemplate(loginForm(
        ()=> alert(`login function defined from view just got triggered.`),
        "Username",
        "Password"
    ))

    return view
}