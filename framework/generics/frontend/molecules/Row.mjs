import {Component} from "../../../core/Component.mjs";

export function Row(children, dataId = null){
    Component.call(this)

    this.children = children

    this.getHTML = function(){

        const id = (dataId)? `id="${dataId}"` : ""

        return `
        <tr ${id}>
            ${this.children}
        </tr>
        `
    }

}