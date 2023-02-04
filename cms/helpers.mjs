import {Component} from "nd_frontend/core/Component.mjs";
import {componentsMap} from "../../../src/javascript/cms/cms.mjs";

export function createComponentsFromModel(model, parentModel = null, name = "t") {
    
    try {
        // let component = new model.componentType(model.options)
        let componentType = componentsMap.get(model.componentType)
        if (!componentType) {
            throw new Error(`Component type ${model.componentType} not found in componentsMap`)
        }
        let component = new componentType(model.options)

        component.options = model.options
        component.id = name
        model.id = name
        for (let subComponent in model.subComponents) {
            if(model.subComponents[subComponent]) {
                component.subComponents[subComponent] = createComponentsFromModel(model.subComponents[subComponent], model,  name + "__" + subComponent)
            }
        }

        return component

    } catch (e) {
        let key = (!parentModel) ? "template" : Object.keys(parentModel.subComponents).find(key => parentModel.subComponents[key] === model)

        console.error(`Error while creating component ${key}: ${e}`)
    }
}