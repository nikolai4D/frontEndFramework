import {Router} from "../../framework/core/Router.mjs";
import {GuardedByModal} from "./frontend/views/GuardedByModal.mjs";
import {Login} from "./frontend/views/Login.mjs";


export const credentials = {
    username: "Bob",
    password: "1234",
    isLoggedIn: false
}


const viewConstructors = [
    Login,
    GuardedByModal
]


export const router = new Router(viewConstructors)
await router.goTo(window.location.pathname.slice(1))