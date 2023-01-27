import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Loggedin_Model(model) { 
    const template_model = {
            view: model.view,
            components: {
                organism_navbar : {
                    molecule_logo : {
                        atom_icon : {
                            icon : model.logoIcon
                        },
                        atom_heading4 : {
                            text : model.logoText
                        }
                    },
                    molecule_iconAndLink1 : {
                        atom_icon : {
                            icon : model.logoIcon
                        },
                        atom_link : {
                            text : model.link1
                        }
                    },
                    molecule_iconAndLink2 : {
                        atom_icon : {
                            icon : model.logoIcon
                        },
                        atom_link : {
                            text : model.link2
                        }
                    },
                    molecule_iconAndLink3 : {
                        atom_icon : {
                            icon : model.logoIcon
                        },
                        atom_link : {
                            text : model.link3
                        }
                    },
                    molecule_iconAndLink4 : {
                        atom_icon : {
                            icon : model.logoIcon
                        },
                        atom_link : {
                            text : model.link4
                        }
                    },
                    molecule_iconAndLink5 : {
                        atom_icon : {
                            icon : model.logoIcon
                        },
                        atom_link : {
                            text : model.link5
                        }
                    },
                    atom_heading4 : {
                        text : model.user
                    },
                    atom_button : {
                        text : model.button.text,
                        onClick : model.button.onClick
                    }
                },
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
                organism_loginOrSignup: {
                    molecule_loginOrSignup : {
                        atom_buttonPositive : {
                            text : model.buttonPositive.text,
                            onClick : model.buttonPositive.onClick
                        },
                        atom_text1: {
                            text : model.text1
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
