import {_view} from "../../../../framework/core/view.mjs";
import t_central from "../../../../framework/generics/frontend/templates/t_central.js";
import {g_modal} from "../guards/g_modal.mjs";
import {a_btn} from "../../../../framework/generics/frontend/atoms/a_btn.mjs";
import {router} from "../../index.mjs";

export const r_guardedByModal = {
    name: "guardedByModal",
    view: v_guardedByModal,
    guard: g_modal()
}

async function v_guardedByModal(){
    const view =  Object.assign({}, _view)

    view.title = "guardedByModal"

    const btn = a_btn("Go to login", ()=> router.goTo("login"))

    view.template = t_central(btn)


    return view
}