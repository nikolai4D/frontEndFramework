import {componentsMap, createComponentModel, findSubModel} from "../../../src/javascript/cms/cms.mjs";
import {componentSchemaFactory} from "./data_schema_types.mjs";

export function Architect() {
    this.blueprint = {
        "title": "Default",
        "url": "/",

        "schema": componentSchemaFactory()
    }

    this.panel = this.getPanel()

}

Architect.prototype.getPanel = function() {
    return buildPanelFromSchema(this.blueprint.schema)
}


export function buildComponentFromSchema(componentSchema, parentSchema = null, name = "t") {

    try {
        let component = new componentSchema.componentTypeKey(componentSchema.options)
        component.options = componentSchema.options
        component.id = name
        componentSchema.id = name
        for (let subComponent in componentSchema.subComponents) {
            if(componentSchema.subComponents[subComponent]) {
                component.subComponents[subComponent] = buildComponentFromSchema(componentSchema.subComponents[subComponent], componentSchema, "__" + name + subComponent)
            }
        }

        return component

    } catch (e) {
        let key = (!parentSchema) ? "template" : Object.keys(parentSchema.subComponents).find(key => parentSchema.subComponents[key] === componentSchema)

        console.error(`Error while creating component ${key}: ${e}`)
    }
}

function buildPanelFromSchema(componentSchema){
    let list = document.createElement('ul')

    // Component type
    let htmlComponentType = document.createElement('li')
    let htmlComponentTypeHeader= document.createElement('span')
    htmlComponentTypeHeader.innerText = "Component type: "
    htmlComponentType.append(htmlComponentTypeHeader)

    let htmlComponentTypeSelector = document.createElement('select')

    for (let [key, value] of componentsMap) {
        let option = document.createElement('option')
        option.value = key
        option.innerText = key
        htmlComponentTypeSelector.append(option)

        if (componentSchema.componentType === value) {
            option.selected = true
        }
    }

    htmlComponentTypeSelector.addEventListener('change', (event) => {
        let constructor = componentsMap.get(event.target.value)
        let newModelComponent= createComponentModel(constructor)
        console.log("newModelComponent: ", newModelComponent)
        let newComponent= new constructor(newModelComponent.options)

        let isModelFound = findSubModel(view.model, componentSchema)
        console.log("isModelFoundincms: ", isModelFound)

        view.replaceComponent(componentSchema, newModelComponent, newComponent)
    })

    htmlComponentType.append(htmlComponentTypeSelector)
    list.append(htmlComponentType)

    //Component options
    if(componentSchema.options ) {
        let options = document.createElement('li')
        let optionsHeader = document.createElement('span')
        optionsHeader.innerText = 'Options'
        options.append(optionsHeader)

        let optionsSelector = document.createElement("ul")

        for (let option in componentSchema.options) {
            let optionItem = document.createElement('li')
            let optionHeader = document.createElement('span')
            optionHeader.innerText = option
            let optionValue = document.createElement('input')
            optionValue.value = componentSchema.options[option]

            optionValue.addEventListener('change', (e) => {
                view.updateModelAndComponent(e, modelComponent, option)
            })

            optionItem.append(optionHeader)
            optionItem.append(optionValue)
            optionsSelector.append(optionItem)
        }
        options.append(optionsSelector)

        list.append(options)
    }

    //Subcomponents
    if(componentSchema.subComponents) {
        let subComponents = document.createElement('li')
        let subComponentsHeader = document.createElement('span')
        subComponentsHeader.innerText = "subComponents"
        subComponents.append(subComponentsHeader)

        for (let subComponent in componentSchema.subComponents) {
            let subComponentDiv = document.createElement('div')
            let subComponentHeading = document.createElement('span')
            subComponentHeading.innerText = subComponent
            subComponentDiv.append(subComponentHeading)

            subComponentDiv.append(buildPanelFromSchema(componentSchema.subComponents[subComponent]))
            subComponents.append(subComponentDiv)
        }
        list.append(subComponents)
    }

    return list
}

