import {Organism_ListDetailInformation} from "../generics/components/organisms/Organism_ListDetailsInformation.mjs";

let testModel = {
    leftPanel: {
        atom_heading4: {
            text: "Output Processes"
        },
        items: [
            {
                text: "item 1",
                onClick: () => {
                    console.log("clicked")
                }
            },
            {
                text: "item 2"
            },
            {
                text: "item 3"
            }
        ]
    },
    centralPanel: {
        heading: {
            text: "Information x"
        },
        detail: {
            text: "Detail  about information x."
        }
    },
    rightPanel: {
        atom_heading4: {
            text: "Input Processes"
        },
        items: [
            {
                text: "item 1"
            },
            {
                text: "item 2"
            },
            {
                text: "item 3"
            }
        ]
    },
    bottomPanel: [
        {
            text: "process 1"
        },
        {
            text: "process 2"
        },
        {
            text: "process 3"
        }
    ],
    relatedProcesses: {
        atom_heading4: {
            text: "Related Processes"
        },
        items: [
            {
                text: "item 1"
            },
            {
                text: "item 2"
            },
            {
                text: "item 3"
            }
        ]
    },
    relatedInformations: {
        atom_heading4: {
            text: "Related Informations"
        },
        items: [
            {
                text: "item 1"
            },
            {
                text: "item 2"
            },
            {
                text: "item 3"
            }
        ]
    },
    relatedOrganisations: {
        atom_heading4: {
            text: "Related Organisations"
        },
        items: [
            {
                text: "item 1"
            },
            {
                text: "item 2"
            },
            {
                text: "item 3"
            }
        ]
    }
}

let testedComponent = new Organism_ListDetailInformation(testModel)

document.body.appendChild(testedComponent.getElement())