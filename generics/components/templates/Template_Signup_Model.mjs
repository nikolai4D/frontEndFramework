import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Signup_Model(model) { 
    const template_model = {
            view: model.view,
            components: {
                organism_startInfo : {
                    molecule_logo : {
                        atom_icon : {
                            icon : model.logoIcon
                        },
                        atom_heading4 : {
                            text : model.logoText
                        }
                    },
                    molecule_headerAndText : {
                        atom_heading4 : {
                            text : model.startHeading
                        },
                        atom_text1 : {
                            text : model.startText
                        }
                    }
                },
                organism_signupForm: {
                    molecule_signupForm : {
                        atom_input: {
                            type: model.inputType,
                            placeholder: model.inputPlaceholder,
                        },
                        atom_buttonNeutral : {
                            text : model.buttonNeutral.text,
                            onClick : model.buttonNeutral.onClick
                        }
                    }
                }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
