import {Router} from "../../framework/core/router.mjs";
import {r_login} from "./frontend/views/v_login.mjs";


const routes = [
    r_login
    
]


export const router = Router(routes)
await router.goTo(window.location.pathname.slice(1))