import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading4} from "../atoms/Atom_Heading4.mjs";
import {Atom_Input} from "../atoms/Atom_Input.mjs";
import {Atom_ButtonPositive} from "../atoms/Atom_ButtonPositive.mjs";

export function ListAllSearch (model){
    Component.call(this)


    this.getHtml = function(){

        let lists = ""
        for (let list of model.lists){
            lists += `
                <div class="list-all-search-list">
                    <div class="list-all-search-list-heading">
                        <h4>${list.heading}</h4>
                    </div>
                    <div class="list-all-search__list-items">
                        ${list.items.map(item => `
                            <ul class="list-all-search__list-item">
                                <li>${item.text}</li>
                            </ul>
                        `).join('')}
                    </div>
                </div>
            `
        }

        return `
            <div class="organism_list-all-search">
                <div>
                    ${slot('heading')}
                    ${slot('search')}
                    ${slot('button')}
                </div>
                <div>
                    ${lists}
                </div>
            </div>
        `
    }


    this.bindScript = function(){
        let heading = new Atom_Heading4(model.atom_heading4)
        this.fillSlot('heading', heading.getElement())

        let searchInput = new Atom_Input(model.atom_input)
        this.fillSlot('search', searchInput.getElement())

        let searchButton = new Atom_ButtonPositive(model.atom_button_positive)
        this.fillSlot('button', searchButton.getElement())
    }



}