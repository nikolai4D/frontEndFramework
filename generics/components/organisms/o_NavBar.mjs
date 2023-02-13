import {Component} from "../../../core/Component.mjs";
import {a_Link} from "../atoms/a_Link.mjs";

export function o_NavBar(model){
    Component.call(this)

    this.options = {
        routesMap: null,
    }

    this.getHtml = function(){

        let links = ""
        for (let i of this.options.routesMap.keys()){
            links += "<li>" + this.slot(i) + "</li>"
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

        for (let i of this.options.routesMap){
            let link = new a_Link(i[0], i[1], router)
            this.fillSlot(i[0], link.getElement())
        }
    }

}