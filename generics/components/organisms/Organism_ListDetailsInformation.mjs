import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Icon} from "../atoms/Atom_Icon.mjs";
import {Atom_Text1} from "../atoms/Atom_Text1.mjs";
import {Molecule_List} from "../molecules/Molecule_List.mjs";
import {Atom_Heading4} from "../atoms/Atom_Heading4.mjs";

export function Organism_ListDetailInformation(model) {

    Component.call(this);

    this.getHtml = function() {
        return `     
     
        <div class="organism_list-detail-information">   
            <div class="organism_list-detail-information__left organism_list-detail-information__list">
                ${slot("left-panel")}
            </div>
            
            <div class="organism_list-detail-information__arrow-left">
                ${slot("arrow-left")}
            </div>
            
            
            <div class="organism_list-detail-information__central">
                ${slot("central-heading")}
                ${slot("central-detail")}
            </div>
            
            <div class="organism_list-detail-information__arrow-right">
                ${slot("arrow-right")}
            </div>
            
            <div class="organism_list-detail-information__right organism_list-detail-information__list">
                ${slot("right-panel")}
            </div>
            
            <div class="organism_list-detail-information__arrow-bottom">
                ${slot("arrow-bottom")}
            </div>
            
            <div class="organism_list-detail-information__lists">
                ${slot("related-processes")}
                ${slot("related-informations")}
                ${slot("related-organisations")}
            </div>
            
        </div>
    `
    }

    this.bindScript = function() {

        let leftList = new Molecule_List(model.leftPanel);
        this.fillSlot("left-panel", leftList.getElement());

        let rightList = new Molecule_List(model.rightPanel);
        this.fillSlot("right-panel", rightList.getElement());

        let centralHeading = new Atom_Heading4(model.centralPanel.heading);
        this.fillSlot("central-heading", centralHeading.getElement());

        let centralContent = new Atom_Text1(model.centralPanel.detail);
        this.fillSlot("central-detail", centralContent.getElement());


        this.fillSlot("arrow-left", new Atom_Icon({icon: "bi bi-caret-right-fill"}).getElement());
        this.fillSlot("arrow-right", new Atom_Icon({icon: "bi bi-caret-right-fill"}).getElement());
        this.fillSlot("arrow-bottom", new Atom_Icon({icon: "bi bi-caret-up-fill"}).getElement());


        let processList = new Molecule_List(model.relatedProcesses);
        let informationList = new Molecule_List(model.relatedInformations);
        let organisationList = new Molecule_List(model.relatedOrganisations);

        this.fillSlot("related-processes", processList.getElement());
        this.fillSlot("related-informations", informationList.getElement());
        this.fillSlot("related-organisations", organisationList.getElement());
    }
}