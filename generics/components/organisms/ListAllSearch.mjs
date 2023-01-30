import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Heading4} from "../atoms/Atom_Heading4.mjs";
import {Atom_Input} from "../atoms/Atom_Input.mjs";
import {Atom_ButtonPositive} from "../atoms/Atom_ButtonPositive.mjs";
import {Molecule_List} from "../molecules/Molecule_List.mjs";
import {Atom_Heading1} from "../atoms/Atom_Heading1.mjs";

export function ListAllSearch (model){
    Component.call(this)


    this.getHtml = function(){

        let lists = ""
        for (let listIndex in model.lists){
            lists += `
            ${slot('list' + listIndex)}
            `
        }

        return `
            <div class="organism_list-all-search">
                <div class="organism_list-all-search__top">
                    ${slot('heading')}
                    <div>
                        ${slot('search')}
                        ${slot('button')}
                    </div>
                    
                </div>
                ${lists}
            </div>
        `
    }


    this.bindScript = function(){
        let heading = new Atom_Heading1(model.atom_heading4)
        this.fillSlot('heading', heading.getElement())

        let searchInput = new Atom_Input(model.atom_input)
        this.fillSlot('search', searchInput.getElement())

        let searchButton = new Atom_ButtonPositive(model.atom_button_positive)
        this.fillSlot('button', searchButton.getElement())

        for (let listIndex in model.lists){
            let list = model.lists[listIndex]
            let listComponent = new Molecule_List(list)
            this.fillSlot('list' + listIndex, listComponent.getElement())
        }
    }



}