import {slot} from "../../../core/helpers.mjs";

export function Cell({ children, id=null,  }) {


    this.getHTML = function () {

        const idString = (id) ? `id="${id}"` : ""

        return `
        <td ${id}>
            ${slot}
        </td>
        `;
    }
}