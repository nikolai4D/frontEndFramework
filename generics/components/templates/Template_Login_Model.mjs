import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";
import { Template_Login_View } from "./Template_Login_View.mjs";

export function Template_Login_Model(model) { 
    SEND_VIEWSTATE_TO_STATE(model)
}