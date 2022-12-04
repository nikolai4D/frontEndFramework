import {view} from "../../../../framework/core/view.mjs";
import {slot} from "../../../../framework/core/helpers.mjs";
import {loginForm} from "../organisms/loginForm.mjs";

export const viewWithScriptRoute = {
    name: "viewWithScriptRoute",
    view: viewWithComponent,
    guard: null
}

function viewWithComponent(){
    return Object.assign({}, view(), _viewWithComponent)
}

const _viewWithComponent = {
    getTemplate: async function() {
        return `
        <div>
            <h1>View with component</h1>
            ${slot("myComp")}
        </div>`
    },

    bindScript: async function() {
        const onSubmit = () => { alert(`login function defined from view just got triggered.`) }

        let myComp = loginForm(onSubmit, "Username", "Password")

        await this.fillSlot("myComp", await myComp.getElement())
    }
}