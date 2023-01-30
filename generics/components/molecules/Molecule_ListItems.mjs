import { Component } from "nd_frontend/core/Component.mjs";

export function Molecule_ListItems(data) {
    Component.call(this)

    this.getHtml = function() {
        return `<div>
                    ${(data.map((item, index) => {
                        return `<li>${item.text}
                            <span>
                                <i class="${item.icon}"></i>
                            </span>
                        </li>`
                     })).join("")}
                </div>`
    }
}