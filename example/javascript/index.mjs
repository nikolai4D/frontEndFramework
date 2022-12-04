import {Router} from "../../framework/core/router.mjs";
import {indexRoute} from "./frontend/views/indexView.js";
import {viewWithScriptRoute} from "./frontend/views/viewWithComponent.mjs";


const routes = [
    indexRoute,
    viewWithScriptRoute
]


export const router = Router(routes)
await router.goTo(window.location.pathname.slice(1))