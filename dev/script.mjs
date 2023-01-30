import {Organism_Form4Dropdowns} from "../generics/components/organisms/Organism_Form4Dropdowns.mjs";

let testmodel ={
    heading1: {
        text: "dropdown 1"
    },
    heading2: {
        text: "dropdown 2"
    },
    heading3: {
        text: "dropdown 3"
    },
    heading4: {
        text: "dropdown 4"
    },
    dropdown1: {
        options: [
            {
                text: "Option 1",
            }
        ]
    },
    dropdown2: {
        options: [
            {
                text: "Option 2",
            }
        ]
    },
    dropdown3: {
        options: [
            {
                text: "Option 3",
            }
        ]
    },
    dropdown4: {
        options: [
            {
                text: "Option 4",
            }
        ]
    },
    buttonNeutral: {
        text: "Light Grey",
        onClick: function () {
            console.log("Button clicked")
        }
    }
}

let testedComponent = new Organism_Form4Dropdowns(testmodel)

document.body.appendChild(testedComponent.getElement())