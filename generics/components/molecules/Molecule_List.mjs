import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading4} from "../atoms/Atom_Heading4.mjs";

export function Molecule_List (model){
    Component.call(this)

    this.getHtml = function(){
        return `
                <div class="molecule_list">
                    ${slot('heading')}
                    <ul class="molecule_list__list">
                        ${model.items.map(item => `
                            <li>${item.text}</li>
                        `).join('')}
                    </ul>
                </div> 
        `
    }

    this.bindScript = function(){
        let heading = new Atom_Heading4(model.atom_heading4)
        this.fillSlot('heading', heading.getElement())

        for (let itemIndex in model.items){
            if (model.items[itemIndex].onClick){
                let item = this.element.querySelectorAll('li')[itemIndex]
                item.addEventListener('click', model.items[itemIndex].onClick)
            }
        }
    }

}