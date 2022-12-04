import {Router} from "../../framework/core/router.mjs";
import {r_login} from "./frontend/views/v_login.mjs";
import {r_guardedByModal} from "./frontend/views/v_guardedByModal.mjs";


export const credentials = {
    username: "Bob",
    password: "1234",
    isLoggedIn: false
}


const routes = [
    r_login,
    r_guardedByModal
]


export const router = Router(routes)
await router.goTo(window.location.pathname.slice(1))