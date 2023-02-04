import {createComponentsFromModel} from "../generics/models/Model.mjs";
import {listFromModelComponent} from "../../../src/javascript/cms/cms.mjs";

/**
 *
 * @constructor
 */
export function Controller() {

    // As it is a constructor, Controller itself cannot be async, Async functions needed for a view should be wrapped into methods (like the setView method below).
    this.view= null
    this.blueprint= null

    /**
     * Called by router. In most cases, should not be overridden.
     * @returns {Promise<void>}
     */
    this.render= async function() {

        if(!this.blueprint) throw new Error("Blueprint is not set")
        this.view = createComponentsFromModel(this.blueprint)

        if(!this.view) throw new Error("View is not set")
        document.body.append(this.view.getElement())

        document.title = this.blueprint.title
    }

//     this.updateModelAndComponent = function(e, modelComponent, option) {
//         modelComponent.options[option] = e.target.value
//
//         let component = this.view.findComponentById(modelComponent.id)
//         component.options[option] = e.target.value
//         component.updateElement()
//     }
//
//     this.replaceComponent= function(oldModelComponent, newModelComponent, newComponent) {
//
//         let isModelFound = findSubModel(this.blueprint, oldModelComponent)
//         console.log("isModelFound: ", isModelFound)
//
//         let oldComponent = this.view.findComponentById(oldModelComponent.id)
//         oldComponent.getElement().replaceWith(newComponent.getElement())
//
//         let {parentModel, key} = getComponentModelParent(oldModelComponent, this.blueprint)
//         parentModel.subComponents[key] = newModelComponent
//
//         let newList= listFromModelComponent(newModelComponent, this)
//         document.getElementById("adminPanel").replaceWith(newList)
//     }
// }
//
// export function findSubModel(model, subModel){
//     for(let key in model.subComponents){
//         if(model.subComponents[key] === subModel) return true
//     }
//     return false
// }
//
// export function getComponentModelParent(subModel, model) {
//
//     if(model === subModel) {
//         console.warn("model === subModel")
//     }
//
//     else {
//         for (let key in model.subComponents) {
//             if(model.subComponents[key] === subModel) {
//                 return {parentModel: model, key}
//             }
//             else {
//                 let result = getComponentModelParent(subModel, model.subComponents[key])
//                 if(result) return result
//             }
//         }
//     }
//
//     console.warn("No parent found")
//
}