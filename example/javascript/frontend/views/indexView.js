import {view} from "../../../../framework/core/view.mjs";
import {router} from "../../index.mjs";

export const indexRoute= {
    name: "index",
    view: indexView,
    guard: null
}

function indexView(){
    return  Object.assign({}, view(), _indexView)
}

const _indexView = {
    getTemplate: async function() {
        return `
        <div>
            <h1>Index view</h1>
            <p>This is index text.</p>
            <button>Link to next view</button>
        </div>`
    },

    bindScript: async function() {
        this.element.querySelector("button").addEventListener("click", () => {
            router.goTo("viewWithScriptRoute")
        })
    }
}