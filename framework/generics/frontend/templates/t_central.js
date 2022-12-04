import {_component} from "../../../core/component.mjs";
import {slot} from "../../../core/helpers.mjs";

/**
 * A view with only one single element at it's center.
 * @param centralElement
 */
export default function(centralElement){
    const template =  Object.assign({}, _component, _centralTemplate)
    template.centralElement = centralElement

    return template
}

const _centralTemplate = {

    getHTML: function() {
        return `
        <div>
            ${slot("central")}
        </div>
        `
    },

    bindScript: function() {
        this.fillSlot("central", this.centralElement.getElement())
    }

}