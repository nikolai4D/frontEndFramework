import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Start_Model(model) { 
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
                            text1 : model.startText
                        }
                    }
                },
                organism_loginOrSignup: {
                    molecule_loginOrSignup : {
                        atom_buttonPositive : {
                            text : "Login"
                        },
                        atom_text1: {
                            text : "or"
                        },
                        atom_buttonNeutral : {
                            text : "Signup"
                        }
                    }
                }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
