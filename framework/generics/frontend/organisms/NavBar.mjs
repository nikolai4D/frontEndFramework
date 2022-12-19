import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Link} from "../atoms/Link.mjs";

export function NavBar(routesMap, router){
    Component.call(this)

    this.routesMap = routesMap

    this.getHTML = function(){

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
            let link = new Link(i[0], i[1], router)
            this.fillSlot(i[0], link.getElement())
        }
    }

}