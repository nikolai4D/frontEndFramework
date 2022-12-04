import {_guard} from "../../../../framework/core/guard.mjs";
import {credentials, router} from "../../index.mjs";
import {o_modal} from "../../../../framework/generics/frontend/organisms/o_modal.mjs";
import {o_loginForm} from "../../../../framework/generics/frontend/organisms/o_loginForm.mjs";
import {verify} from "../verify.js";

export function g_modal(){
    return Object.assign({}, _guard, _modalGuard)
}

const _modalGuard = {

    control: async function() {
        if(credentials.isLoggedIn){
            return true
        }
        else{


            const modal = o_modal()
            const loginForm = o_loginForm(
                login,
                "Username",
                "Password"
            )

            async function login(){
                if(verify(this)) {
                    credentials.isLoggedIn = true
                    await router.goTo("guardedByModal")
                    modal.removeElement()
                }
                else{
                    alert("Wrong credentials")
                }

            }

            modal.content = loginForm
            modal.show()

            return false
        }
    }
}