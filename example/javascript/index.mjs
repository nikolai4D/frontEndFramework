import {Router} from "../../framework/core/router.mjs";
import {indexRoute} from "./frontend/views/indexView.js";


const routes = [
    indexRoute,

]


const router = Router(routes)
await router.goTo(routes[0].name)