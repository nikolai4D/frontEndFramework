import { State } from "./State.mjs";

export function SET_VIEWSTATE_TO_STATE(template_model){
    State.views[template_model.view] = template_model
}