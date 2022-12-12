import {Component} from "../../../../core/Component.mjs";


export function Dropdown(options, onChange, allButton = true, radio = false){
    Component.call(this)

    this.optionTemplate = function(option, checked){

        const checkedString = checked ? "checked" : ""

        return `<option ${checkedString} value="${option}">${option}</option>`
    }

    this.getHTML = function(){
        return `
        <select>
            ${options}
        </select>
        `
    }

    this.bindScript = function(){
    }
}