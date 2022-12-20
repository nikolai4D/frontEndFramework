/**
 * Give the clicked coordinates, headers is row 0, and the first column is column 0
 * @param event
 * @returns {{x: number, y: number}}
 */
export function getCellCoords(event) {
    return {
        y: event.target.parentElement.rowIndex - 2,
        x: event.target.cellIndex
    }
}