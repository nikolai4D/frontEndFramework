import { Component } from "nd_frontend/core/Component.mjs";

export function Atom_Input(model) {
  //const { type = "text", placeholder = "..." } = model;
  // this.props = {
  //     type: model.inputType,
  //     placeholder: model.placeholder
  // }
  Component.call(this);

  this.getHtml = function () {
    return `
        <input class="atom_input" type="${model.type}" placeholder="${model.placeholder}">
        `;
  };
}
