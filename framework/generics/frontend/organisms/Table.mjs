import {Component} from "../../../core/Component.mjs";

/**
 *
 * @param headersStringArray
 * @param rowsStringArray
 * @param clickHandler
 * @param data
 * @constructor
 */
export function Table(headersStringArray = [], rowsStringArray = [], clickHandler = () => {
}, data = null) {
    Component.call(this)


    this.headers = headersStringArray
    this.rows = rowsStringArray
    this.clickHandler = clickHandler
    this.data = data

    this.customColumns = []

    /**
     * Add a custom column to the table
     * @param columnIndex
     * @param builder
     */
    this.setColumnBuilder = function(columnIndex, builder){
        this.customColumns.push([columnIndex, builder])
    }


    this.createHeaders = function(headers){
        return headers.map(header=> `<td>${header}</td>`)
    }

    this.createRows = function(rows){
        return rows.map((row, i) => {
            if(row.length > headersStringArray.length) throw new Error("Row has more columns than headers.")
            else if(row.length < headersStringArray.length) throw new Error("Row has less columns than headers.")

            return `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`
        })
    }


    this.getHtml = function() {

        return `
        <table class="table">
            <thead>
                <tr>
                 ${this.createHeaders(this.headers)}
                </tr>
            </thead>
            <tbody>
                ${this.createRows(this.rows)}
            </tbody>
        </table>
        `
    }

    this.bindScript = function() {
        this.element.addEventListener("click", (event)=> this.clickHandler(event))
    }

}