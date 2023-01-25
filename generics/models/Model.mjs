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
e
export function createComponentsFromModel(model, parentModel) {
    try {
        let component = new model.component()
        component.options = model.options
        for (let subComponent in model.subComponents) {
            component.subComponents[subComponent] = createComponentsFromModel(model.subComponents[subComponent], parentModel)
        }

        return component

    } catch (e) {
        let key = parentModel ? "template" : Object.keys(this.subComponents).find(key => parentModel.subComponents[key] === model)

        console.log("error below relates to component model", key)
        console.log(e)
    }
}