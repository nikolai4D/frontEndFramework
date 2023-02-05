import {constructorMap} from "./constructorMap.mjs";
import {buildElementPanelFromSchema} from "./PanelBuilder.mjs";
import {buildSchemaFromComponent} from "../core/helpers.mjs";

export function Architect(controller = null) {

    this.schema = {
        metadata:{
            "title": "Default",
            "url": "/",
        },
        root: {}
    }

    if (controller) {
        this.schema.root = buildSchemaFromComponent(controller.view)
    }

    this.controller = controller
    this.panel = this.getPanel()

}

Architect.prototype.getPanel = function() {
    this.panel = buildElementPanelFromSchema(this.schema.root, this, constructorMap)
    return this.panel
}

Architect.prototype.updateConstructor = function(id, newConstructorKey) {
    // swap component
    let constructor = constructorMap.get(newConstructorKey)
    let component = new constructor()
    if(!component) throw new Error(`Component type ${newConstructorKey} not found in componentsMap`)
    component.id = id
    this.controller.swapComponent(id, component)

    // swap schema
    let newSchema = buildSchemaFromComponent(component)
    let {parentSchema, key, schema} = getSchemaDataFromId(id, this.schema.root)
    parentSchema.subComponents[key] = newSchema

    // swap panel
    let newPanel = buildElementPanelFromSchema(newSchema, this, constructorMap)
    let panel = this.panel.querySelector(`[data-id="${id}"]`)
    panel.replaceWith(newPanel)
}


Architect.prototype.updateOption = function(id, optionKey, optionValue) {
    this.controller.updateComponentOption(id, optionKey, optionValue)
}

/**
 * @param id
 * @param rootSchema
 * @returns {parentSchema, key, schema}
 */
export function getSchemaDataFromId(id, rootSchema) {
    if(rootSchema.id === id) return { parentSchema: null, key: null, schema: rootSchema }

    for (let key in rootSchema.subComponents) {
        if(rootSchema.subComponents[key].id === id) {
            return { parentSchema: rootSchema, key: key, schema: rootSchema.subComponents[key] }
        }

        let result = getSchemaDataFromId(id, rootSchema.subComponents[key])
        if(result) return result
    }
}