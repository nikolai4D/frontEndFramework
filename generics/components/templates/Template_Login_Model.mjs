import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Login_Model(model) { 
    const template_model = {
            view: model.view,
            components: {
                molecule_logo : {
                    atom_icon : {
                        icon : model.logoIcon
                    },
                    atom_heading4 : {
                        text : model.logoText
                    }
                },
                organism_loginForm: {
                    molecule_loginForm : {
                        atom_input: {
                            type: model.inputType,
                            placeholder: model.inputPlaceholder,
                        },
                        atom_buttonPositive : {
                            text : model.buttonPositive.text,
                            onClick : model.buttonPositive.onClick
                        },
                    }
                }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
