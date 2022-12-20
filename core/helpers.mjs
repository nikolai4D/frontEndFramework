/**
 * Take a string and make it into an HTML element.
 * !!! Do not work with sub table tags (tr, td, thead, tbody) !!!
 * @param {string} string
 * @returns {Element}
 */
export function stringToHTMLElement (string) {

    const frame = document.createElement("div");

    frame.insertAdjacentHTML("afterbegin", string);

    return frame.firstElementChild
}


export const slot =(name)=> `<div data-slot="${name}" class="slot"></div>`
