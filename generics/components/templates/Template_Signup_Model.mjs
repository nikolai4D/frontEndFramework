import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Signup_Model(model) {
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
                organism_signupForm: {
                    molecule_signupForm : {
                        atom_input: {
                            type: model.inputType,
                            placeholder: model.inputPlaceholder,
                        },
                        molecule_checkboxLink : {
                            atom_input: {
                                type: model.checkboxInputType,
                            },
                            atomLink_input: {
                                text: model.checkboxText,
                                link: model.checkboxLink,
                                linkText: model.checkboxLinkText
                            }
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
