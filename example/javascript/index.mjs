import {Router} from "../../framework/core/Router.mjs";
import {Login} from "./frontend/views/Login.mjs";
import {Hub} from "./frontend/views/Hub.mjs";
import {UserDetail} from "./frontend/views/UserDetail.mjs";


export const credentials = {
    username: "Bob",
    password: "1234",
    isLoggedIn: false
}


const viewMaps = new Map([
    ["hub",Hub],
    ["login", Login],
    ["user", UserDetail]
])


export const router = new Router(viewMaps)
console.log("loc: " + window.location.pathname)
const path = window.location.pathname.slice(1)
console.log("path: " + path)
router.goTo(path)