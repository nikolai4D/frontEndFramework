/**
 * Give the clicked coordinates, horizontal then vertical. Headers is row 0, and the first column is column 0.
 * @returns {(number|number)[]}
 */
export const getCellCoords =(event)=> [event.target.cellIndex, event.target.parentElement.rowIndex - 2]
