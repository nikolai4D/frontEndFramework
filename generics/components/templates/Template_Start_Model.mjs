import { SEND_VIEWSTATE_TO_STATE } from "./actions/action_send_view_state.mjs";

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
                            text : "Atom_Heading4"
                        },
                        atom_text1 : {
                            text1 : "Atom_Text1"
                        }
                    }
                },
                organism_loginOrSignup: {
                    molecule_loginOrSignup : {
                        atom_button : {
                            button : "Atom_Button"
                        },
                        atom_button : {
                            button : "Atom_Button"
                        }
                    }
                }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
