import {Component} from "../../../core/Component.mjs";

export function Molecule_ListNoHeading (model){
    Component.call(this)

    this.getHtml = function(){
        return `
                <div class="molecule_list">
                    <ul class="molecule_list__list">
                        ${model.items.map(item => `
                            <li>${item.text}</li>
                        `).join('')}
                    </ul>
                </div> 
        `
    }
}