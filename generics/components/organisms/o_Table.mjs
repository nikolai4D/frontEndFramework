import {Component} from "../../../core/Component.mjs";

export function o_Table(model) {
    Component.call(this)

    this.options = {
        headers: null,
        rows: null,
        data: null
    }

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
            if(row.length > this.options.headers.length) throw new Error("Row has more columns than headers.")
            else if(row.length < this.options.headers.length) throw new Error("Row has less columns than headers.")

            return `<tr>${row.map(cell=> `<td>${cell}</td>`).join("")}</tr>`
        })
    }


    this.getHtml = function() {

        return `
        <table>
            <thead>
                <tr>
                 ${this.createHeaders(this.options.headers)}
                </tr>
            </thead>
            <tbody>
                ${this.createRows(this.options.rows)}
            </tbody>
        </table>
        `
    }

    this.bindScript = function() {
        this.element.addEventListener("click", (event)=> this.clickHandler(event))
    }

}