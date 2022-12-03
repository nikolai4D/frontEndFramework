import {view} from "../../../../framework/core/view.mjs";

export const indexRoute= {
    name: "index",
    view: indexView,
    guard: null
}

function indexView(){

    let iv =  Object.assign({}, view(), _indexView)
    return iv
}

const _indexView = {
    getTemplate: async function() {
        return `
        <div>
            <h1>Index view</h1>
            <p>This is index text.</p>
        </div>`
    }
}