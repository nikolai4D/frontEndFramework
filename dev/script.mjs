import {Form4Dropdowns} from "../generics/components/organisms/Form4Dropdowns.mjs";
import {Organism_TwoFieldsOneDropdownOnePicture} from "../generics/components/organisms/Organism_TwoFieldsOneDropdownOnePicture.mjs";

let testmodel ={
    atom_input__1: {
        placeholder: 'First input',
    },
    atom_input__2: {
        placeholder: 'Second input',
    },
    atom_dropdown: {
        text: 'Dropdown',
    },
    atom_picture: {
        src: 'https://www.w3schools.com/images/lamp.jpg',
        alt: 'flower picture',
    }

}

let testedComponent = new Organism_TwoFieldsOneDropdownOnePicture(testmodel)

document.body.appendChild(testedComponent.getElement())