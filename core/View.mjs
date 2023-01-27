import {createComponentsFromModel} from "../generics/models/Model.mjs";
import {listFromModelComponent} from "../../../src/javascript/cms/cms.mjs";

/**
 *
 * @constructor
 */
export function View() {

    // As it is a constructor, View itself cannot be async, Async functions needed for a view should be wrapped into methods (like the setView method below).

    this.title= "default title"
    this.template= null
    this.model= null

    /**
     * Called by router. In most cases, should not be overridden.
     * @returns {Promise<void>}
     */
    this.setView= async function() {

        if(!this.model) throw new Error("View model is not set")
        this.template = createComponentsFromModel(this.model)

        if(!this.template) throw new Error("View template is not set")
        document.body.append(this.template.getElement())

        document.title = this.title
    }

    this.updateModelAndComponent = function(e, modelComponent, option) {
        modelComponent.options[option] = e.target.value

        let component = this.template.findComponentById(modelComponent.id)
        component.options[option] = e.target.value
        component.updateElement()
    }
    
    this.replaceComponent= function(oldModelComponent, newModelComponent, newComponent) {

        let isModelFound = findSubModel(this.model, oldModelComponent)
        console.log("isModelFound: ", isModelFound)

        let oldComponent = this.template.findComponentById(oldModelComponent.id)
        oldComponent.getElement().replaceWith(newComponent.getElement())
        
        let {parentModel, key} = getComponentModelParent(oldModelComponent, this.model)
        parentModel.subComponents[key] = newModelComponent
        
        let newList= listFromModelComponent(newModelComponent, this)
        document.getElementById("adminPanel").replaceWith(newList)
    }
}

export function findSubModel(model, subModel){
    for(let key in model.subComponents){
        if(model.subComponents[key] === subModel) return true
    }
    return false
}

export function getComponentModelParent(subModel, model) {

    if(model === subModel) {
        console.warn("model === subModel")
    }

    else {
        for (let key in model.subComponents) {
            if(model.subComponents[key] === subModel) {
                return {parentModel: model, key}
            }
            else {
                let result = getComponentModelParent(subModel, model.subComponents[key])
                if(result) return result
            }
        }
    }

    console.warn("No parent found")

}