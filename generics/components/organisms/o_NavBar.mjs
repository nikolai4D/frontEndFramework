import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {A_link} from "../atoms/a_Link.mjs";

export function O_NavBar(model){
    Component.call(this)

    this.options = {
        headers: null,
        rows: null,
        data: null
    }

    this.routesMap = routesMap

    this.getHtml = function(){

        let links = ""
        for (let i of this.routesMap.keys()){
            links += "<li>" + slot(i) + "</li>"
        }

        return `
        <nav>
            <ul>
                ${links}
            </ul>
        </nav>
        `
    }


    this.bindScript = function(){

        for (let i of this.routesMap){
            let link = new A_link(i[0], i[1], router)
            this.fillSlot(i[0], link.getElement())
        }
    }

}