import {_component} from "./component.mjs";

// Used by the router to control access to the view and create it.
export const _viewHandler = {
    guard: null,
    view: view
}

function view(){
    return Object.assign({}, _component, _view)
}

export const _view = {
    setView: function(view){

    }
}