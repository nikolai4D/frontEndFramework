import { Component } from "../../../core/Component.mjs";

export function Atom_Image ( model )
{
    Component.call( this );

    this.getHtml = function ()
    {
        return `
        <img src="${ model.src }" alt="${ model.alt }" class="atom_image" />`;
    };

}