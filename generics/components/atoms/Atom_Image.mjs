import { Component } from "../../../core/Component.mjs";

export function Atom_Image ( model )
{
    Component.call( this );

    this.getHtml = function ()
    {
        return `
        <img src="${ model.imgSrc }" alt="${ model.alt }" class="__"/>`;
    };

    this.bindScript = function () {};

    this.onClick = onClick;
}