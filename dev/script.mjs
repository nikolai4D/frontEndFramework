import {Organism_ListDetailProcesses} from "../generics/components/organisms/Organism_ListDetailProcesses.mjs";

let testModel = {
    topPanel: [
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
    leftPanel: {
        atom_heading4: {
            text: "Heading"
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
    centralPanel: {
        heading: {
            text: "Heading"
        },
        detail: {
            text: "Detail  about the process."
        }
    },
    rightPanel: {
        atom_heading4: {
            text: "Heading"
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
}

let testedComponent = new Organism_ListDetailProcesses(testModel)

document.body.appendChild(testedComponent.getElement())