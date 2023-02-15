import {Component} from "../../../core/Component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {Atom_Icon} from "../atoms/Atom_Icon.mjs";
import {Atom_Text1} from "../atoms/Atom_Text1.mjs";
import {Molecule_List} from "../molecules/Molecule_List.mjs";
import {Atom_Heading4} from "../atoms/Atom_Heading4.mjs";

export function Organism_ListDetailProcesses(model) {
    Component.call(this);

    this.getHtml = function() {
        return `
            <div class="organism_list-detail-processes">
                <div class="organism_list-detail-processes__top organism_list-detail-processes__process_queue">
                    ${slot("top-panel_1")}
                    ${slot("top-panel_first-arrow")}
                    ${slot("top-panel_2")}
                    ${slot("top-panel_second-arrow")}
                    ${slot("top-panel_3")}
                </div>
                
                
                <div class="organism_list-detail-processes__arrow-top">
                    ${slot("arrow-top")}
                </div>
                
                <div class="organism_list-detail-processes__left organism_list-detail-processes__list">
                    ${slot("left-panel")}
                </div>
                
                <div class="organism_list-detail-processes__arrow-left">
                    ${slot("arrow-left")}
                </div>
                
                
                <div class="organism_list-detail-processes__central">
                    ${slot("central-heading")}
                    ${slot("central-detail")}
                </div>
                
                <div class="organism_list-detail-processes__arrow-right">
                    ${slot("arrow-right")}
                </div>
                
                <div class="organism_list-detail-processes__right organism_list-detail-processes__list">
                    ${slot("right-panel")}
                </div>
                
                <div class="organism_list-detail-processes__arrow-bottom">
                    ${slot("arrow-bottom")}
                </div>
                
                <div class="organism_list-detail-processes__bottom organism_list-detail-processes__process_queue">
                    ${slot("bottom-panel_1")}
                    ${slot("bottom-panel_first-arrow")}
                    ${slot("bottom-panel_2")}
                    ${slot("bottom-panel_second-arrow")}
                    ${slot("bottom-panel_3")}
                </div>
                
            </div>
        `
    }

    this.bindScript = function() {

        for(let i in model.topPanel){
            let processElement = new Atom_Text1(model.topPanel[i]);
            this.fillSlot("top-panel_" + (parseInt(i)+1), processElement.getElement());
        }

        for(let i in model.bottomPanel){
            let processElement = new Atom_Text1(model.bottomPanel[i]);
            this.fillSlot("bottom-panel_" + (parseInt(i)+1), processElement.getElement());
        }

        let leftList = new Molecule_List(model.leftPanel);
        this.fillSlot("left-panel", leftList.getElement());

        let rightList = new Molecule_List(model.rightPanel);
        this.fillSlot("right-panel", rightList.getElement());

        let centralHeading = new Atom_Heading4(model.centralPanel.heading);
        this.fillSlot("central-heading", centralHeading.getElement());

        let centralContent = new Atom_Text1(model.centralPanel.detail);
        this.fillSlot("central-detail", centralContent.getElement());

        this.fillSlot("top-panel_first-arrow", new Atom_Icon({icon: "bi bi-caret-right"}).getElement());
        this.fillSlot("top-panel_second-arrow", new Atom_Icon({icon: "bi bi-caret-right"}).getElement());
        this.fillSlot("bottom-panel_first-arrow", new Atom_Icon({icon: "bi bi-caret-right"}).getElement());
        this.fillSlot("bottom-panel_second-arrow", new Atom_Icon({icon: "bi bi-caret-right"}).getElement());

        this.fillSlot("arrow-top", new Atom_Icon({icon: "bi bi-caret-up-fill"}).getElement());
        this.fillSlot("arrow-left", new Atom_Icon({icon: "bi bi-caret-right-fill"}).getElement());
        this.fillSlot("arrow-right", new Atom_Icon({icon: "bi bi-caret-right-fill"}).getElement());
        this.fillSlot("arrow-bottom", new Atom_Icon({icon: "bi bi-caret-up-fill"}).getElement());
    }
}