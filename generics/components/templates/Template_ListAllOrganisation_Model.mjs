import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_ListAllOrganisation_Model(model) { 
    const template_model = {
            view: model.view,
            components: {
               atom_heading4 : {
                text : model.startHeading
               }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
