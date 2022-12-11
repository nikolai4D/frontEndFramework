import {Router} from "../../framework/core/Router.mjs";
import {GuardedByModal} from "./frontend/views/GuardedByModal.mjs";
import {Login} from "./frontend/views/Login.mjs";
import {Hub} from "./frontend/views/Hub.mjs";
import {UserDetail} from "./frontend/views/UserDetail.mjs";


export const credentials = {
    username: "Bob",
    password: "1234",
    isLoggedIn: false
}


const viewConstructors = [
    Hub,
    Login,
    UserDetail
]


export const router = new Router(viewConstructors)
await router.goTo(window.location.pathname.slice(1))