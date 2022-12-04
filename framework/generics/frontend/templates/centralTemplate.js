import {_component} from "../../../core/component.mjs";
import {slot} from "../../../core/helpers.mjs";
import {loginForm} from "../organisms/loginForm.mjs";

/**
 * A view with only one single element at it's center.
 * @param centralElement
 */
export default function(centralElement){
    const template =  Object.assign({}, _component, _centralTemplate)
    template.centralElement = centralElement

}

const _centralTemplate = {
    getHTML: async function() {
        return `
        <div>
            ${slot("loginForm")}
        </div>
        `
    },

    bindScript: async function() {
        await this.fillSlot("centralElement", await this.centralElement.getElement())
    }

}