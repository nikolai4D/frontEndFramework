import {slot} from "../../../core/helpers.mjs";
import {Component} from "../../../core/Component.mjs";
import {Molecule_HeaderAndText} from "../molecules/Molecule_HeaderAndText.mjs";
import {Molecule_HeaderAndList} from "../molecules/Molecule_HeaderAndList.mjs";
import {Atom_Image} from "../atoms/Atom_Image.mjs";
import {Button} from "../atoms/Button.mjs";

export function SearchResultDetail(model){
    Component.call(this)
    
    this.getHtml = function() {
        return `
        <div>
            <div>
                ${slot("headerAndText")}
            </div>
            <div>
                ${slot("picture")}
            </div>
            <div>
                ${slot("listHeader1")}
                ${slot("listHeader2")}
                ${slot("listHeader3")}
            </div>
            <div>
                ${slot("button")}
            </div>
        </div>`
    }


    this.bindScript= function() {
        let headerAndText = new Molecule_HeaderAndText(model.molecule_headerAndText)
        let atom_image = new Atom_Image(model.atom_image)
        let headerAndList1 = new Molecule_HeaderAndList(model.molecule_headerAndList1)
        let headerAndList2 = new Molecule_HeaderAndList(model.molecule_headerAndList2)
        let headerAndList3 = new Molecule_HeaderAndList(model.molecule_headerAndList3)
        let button = new Button(model.button)


        this.fillSlot("headerAndText", headerAndText.getElement());
        this.fillSlot("picture", atom_image.getElement());
        this.fillSlot("listHeader1", headerAndList1.getElement());
        this.fillSlot("listHeader2", headerAndList2.getElement());
        this.fillSlot("listHeader3", headerAndList3.getElement());
        this.fillSlot("button", button.getElement());
    }
}

