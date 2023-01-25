import {Component} from "../../core/Component.mjs";

/**
 *
 * @type {{component: Component, options: {}, subComponents: {}}}
 */
export const ComponentModel = {
    component: Component,
    options: {},
    subComponents: {}
}

export function createComponentsFromModel(model, parentModel = null) {
    try {
        let component = new model.component(model.options)
        component.options = model.options
        for (let subComponent in model.subComponents) {
            component.subComponents[subComponent] = createComponentsFromModel(model.subComponents[subComponent], model)
        }

        return component

    } catch (e) {
        let key = (!parentModel) ? "template" : Object.keys(parentModel.subComponents).find(key => parentModel.subComponents[key] === model)

        console.error(`Error while creating component ${key}: ${e}`)
    }
}