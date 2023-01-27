import { Component } from "../../../core/Component.mjs";

export function Atom_Text2Link( model ) {
    Component.call( this );

    this.getHtml = function ()
    {
        return `
                <p class="atom_text1">${ model.text } <a href="${ model.link }">${ model.linkText }</a></p>
                `;
    };

    this.bindScript = function (){};
}