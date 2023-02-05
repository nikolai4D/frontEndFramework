import { Component } from "../../../core/Component.mjs";

export function a_Placeholder(){
    Component.call(this)

    this.getHtml = function(){

        return `
            <div class="atom_placeholder">
                <span>Placeholder</span>
            </div>
        `
    }
}