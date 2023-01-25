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

export function createComponentsFromModel(model) {
    let component = new model.component()
    component.options = model.options
    for (let subComponent in model.subComponents) {
        component.subComponents[subComponent] = createComponentsFromModel(model.subComponents[subComponent], component)
    }
    return component
}