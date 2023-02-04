import {Controller} from "../core/Controller.mjs";
import {Model_Default_Start} from "../generics/models/Model_Default_Start.mjs";
import {listFromModelComponent} from "./cms/CmsHelpers.mjs";


console.log('Hello World');

let cms = {
    show: () => { console.log("cms.show()") },
    hide: () => { console.log("cms.hide()") },
}

function bop () {
    console.log("bop")
}

export function v_Start() {
    Controller.call(this)

    this.title = "Start"
    this.model = Model_Default_Start

    this.adminPanel= listFromModelComponent(this.model, this)
    document.body.append(this.adminPanel)
}

let view = new v_Start()
view.render()