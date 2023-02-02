import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { Molecule_HeaderAndText } from "../molecules/Molecule_HeaderAndText.mjs";

export function Organism_StartInfo(model) {
    Component.call(this)

    this.getHtml = function() {

        return `
            <div class="organism_start-info">
                    ${slot("logo")}
                    ${slot("headerAndText")}
            </div>
        `
    }

    this.bindScript= function() {
        let logo = new Molecule_Logo(model.molecule_logo)
        let headerAndText = new Molecule_HeaderAndText(model.molecule_headerAndText)
        this.fillSlot("logo", logo.getElement());
        this.fillSlot("headerAndText", headerAndText.getElement());
    }

}