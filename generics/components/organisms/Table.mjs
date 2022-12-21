import {Component} from "../../../core/Component.mjs";

export function Table(headersString = [], rowsString = [], clickHandler = () => {}, data = null) {
    Component.call(this)


    this.headers = headersString
    this.rows = rowsString
    this.clickHandler = clickHandler
    this.data = data


    /**
     * this function wrap the cell in a td tag. In most cases it should not be overridden.
     * @param headers
     * @returns {*}
     */
    this.createHeaders = function(headers){
        return headers.map(header=> `<td>${header}</td>`)
    }

    /**
     * this function wrap the cell in a td tag. In most cases it should not be overridden.
     * @param rows
     * @returns {*}
     */
    this.createRows = function(rows){
        return rows.map((row, i) => {
            if(row.length > this.headers.length) throw new Error("Row has more columns than headers.")
            else if(row.length < this.headers.length) throw new Error("Row has less columns than headers.")

            return `<tr>${row.map(cell=> `<td>${cell}</td>`).join("")}</tr>`
        })
    }


    this.getHtml = function() {

        return `
        <table>
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