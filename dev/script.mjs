import {Organism_ListAllSearch} from "../generics/components/organisms/Organism_ListAllSearch.mjs";

let testModel ={
    atom_heading4: {
        text: 'Heading 1'
    },
    atom_input: {
        placeholder: 'InputField1'
    },
    atom_button_positive: {
        text: 'Light Grey'
    },
    lists: [
        {
            atom_heading4: {
                text:'list heading 1'
            },
            items: [
                {
                    text: 'item 1',
                },
                {
                    text: 'item 2',
                },
                {
                    text: 'item 3',
                },
                {
                    text: 'item 4',
                },
                {
                    text: 'item 5',
                }
            ]
        },
        {
            atom_heading4: {
                text:'list heading 2'
            },
            items: [
                {
                    text: 'item 1',
                },
                {
                    text: 'item 2',
                },
                {
                    text: 'item 3',
                },
                {
                    text: 'item 4',
                },
                {
                    text: 'item 5',
                }
            ]
        }
    ]
}

let testedComponent = new Organism_ListAllSearch(testModel)

document.body.appendChild(testedComponent.getElement())