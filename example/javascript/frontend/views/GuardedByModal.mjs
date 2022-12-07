import {router} from "../../index.mjs";
import {View} from "../../../../framework/core/View.mjs";
import Central from "../../../../framework/generics/frontend/templates/Central.mjs";

export async function GuardedByModal(){
    await View.call(this)

    this.title = "Guarded By Modal"
    this.constructor.route = "guardedByModal"

    const btn = new Button("Go to login", ()=> router.goTo("login"))

    this.template = Central(btn)
}