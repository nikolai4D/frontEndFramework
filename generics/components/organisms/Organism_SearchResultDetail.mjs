import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Molecule_HeaderAndText } from "../molecules/Molecule_HeaderAndText.mjs"
import { Atom_Image } from "../atoms/Atom_Image.mjs";
import { Molecule_List } from "../molecules/Molecule_List.mjs";

export function Organism_SearchResultDetail(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="org_search_result_detail">
                <div class="org_search_res_det_top">
                    <div>
                        ${slot("mol_head_text")}
                    </div>
                    <div class="org_search_res_det_image">
                        ${slot("atom_image")}
                    </div>
                </div>
                <div class="org_search_res_det_lists">
                    ${slot("listInfo")}
                    ${slot("listProcess")}
                    ${slot("listOrg")}
                </div>
            </div>
        ` 
    }

    this.bindScript= function() {
        let mol_head_text = new Molecule_HeaderAndText(model.molecule_headerAndText)
        this.fillSlot("mol_head_text", mol_head_text.getElement());

        let atom_image = new Atom_Image(model.atom_image)
        this.fillSlot("atom_image", atom_image.getElement());

        let listInfo = new Molecule_List(model.molecule_list1)
        this.fillSlot("listInfo", listInfo.getElement());

        let listProcess = new Molecule_List(model.molecule_list2)
        this.fillSlot("listProcess", listProcess.getElement());

        let listOrg = new Molecule_List(model.molecule_list3)
        this.fillSlot("listOrg", listOrg.getElement());
    }
}