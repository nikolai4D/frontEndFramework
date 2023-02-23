import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Input} from "../atoms/Atom_Input.mjs";
import {Atom_ButtonPositive} from "../atoms/Atom_ButtonPositive.mjs";
import {Molecule_List} from "../molecules/Molecule_List.mjs";
import {Atom_Heading2} from "../atoms/Atom_Heading2.mjs";

export function Organism_ListAll (model){

    Component.call(this)

    this.getHtml = function(){

        return `
            <div class="organism_list-all-search">
                <div class="organism_list-all-search__top">
                    ${slot('heading')}
                    <div class="organism_list_search_btn">
                        ${slot('search')}
                        ${slot('button')}
                    </div>
                    
                </div>
                <div id="organism_all_lists" class="organism_list-all-search__lists">
                    ${slot('list1')}
                    ${slot('list2')}
                    ${slot('list3')}
                </div>
                
            </div>
        `
    }

    this.bindScript = function(){

        let heading = new Atom_Heading2(model.atom_heading4)
        this.fillSlot('heading', heading.getElement())

        let searchInput = new Atom_Input(model.atom_input)
        this.fillSlot('search', searchInput.getElement())

        let searchButton = new Atom_ButtonPositive(model.atom_button_positive)
        this.fillSlot('button', searchButton.getElement())

        let listComponent1 = new Molecule_List(model.lists1)
        this.fillSlot('list1', listComponent1.getElement())

        let listComponent2 = new Molecule_List(model.lists2)
        this.fillSlot('list2', listComponent2.getElement())

        let listComponent3 = new Molecule_List(model.lists3)
        this.fillSlot('list3', listComponent3.getElement())

    }
}