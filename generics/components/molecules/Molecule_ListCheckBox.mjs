import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Atom_Heading4} from "../atoms/Atom_Heading4.mjs";

export function Molecule_ListCheckBox(model = {}) {
    const {type="text", placeholder="..."} = model
    this.props = {
        type,
        placeholder
    }
    Component.call(this)

    this.getHtml = function(){
        return `
                <div class="molecule_list-wrapper">
                    ${slot('heading')}
                    <ul class="mol_checkbox-list-heading">
                        ${model.items.map(item => `
                            <div class="molecule-input-text">
                                <input class="atom_input" type="${item.type}" placeholder="${item.placeholder}">
                                <h4>${item.text}</h4>
                            </div>
                        `).join('')}
                    </ul>
                </div> 
        `
    }

//     ${model.items1.map(item => `
//     <p>${item.text}</p>
// `).join('')}

    this.bindScript = function(){
        let heading = new Atom_Heading4(model.atom_heading4)
        this.fillSlot('heading', heading.getElement())
    }

}