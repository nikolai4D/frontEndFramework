import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Search_Model(model) { 
    const template_model = {
            view: model.view,
            components: {
               atom_heading4 : {
                text : model.startHeading
               },
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
                            icon : model.icon1
                        },
                        atom_link : {
                            text : model.link1
                        }
                    },
                    molecule_iconAndLink2 : {
                        atom_icon : {
                            icon : model.icon2
                        },
                        atom_link : {
                            text : model.link2
                        }
                    },
                    molecule_iconAndLink3 : {
                        atom_icon : {
                            icon : model.icon3
                        },
                        atom_link : {
                            text : model.link3
                        }
                    },
                    molecule_iconAndLink4 : {
                        atom_icon : {
                            icon : model.icon4
                        },
                        atom_link : {
                            text : model.link4
                        }
                    },
                    molecule_iconAndLink5 : {
                        atom_icon : {
                            icon : model.icon5
                        },
                        atom_link : {
                            text : model.link5
                        }
                    },
                    molecule_textAndButton : {
                        atom_text1 : {
                            text : model.user
                        },
                        atom_button : {
                            text : model.button.text,
                            onClick : model.button.onClick
                        } 
                    }, 
                    atom_heading4 : {
                        text : model.user
                    },
                    atom_button : {
                        text : model.button.text,
                        onClick : model.button.onClick
                    },
                    organism_usermodal : {
                        primary : model.primary
                    },

                },
                content : {
                organism_userProfileContent : {
                    molecule_nameInput : {
                        atom_text1 : {
                             text: model.nameInputText
                        },
                       atom_input : {
                        type : model.nameInputType,
                        placeholder: model.placeholderName
                       },
                    },
                    molecule_emailInput : {
                        atom_text1 : {
                             text: model.emailInputText
                        },
                       atom_input : {
                        type : model.emailInputType,
                        placeholder: model.placeholderEmail
                       },
                    },
                    molecule_textAndDropdown : {
                        atom_text1 : {
                             text: model.dropdownInputText
                        },
                       atom_dropdown : {
                        dropdown: model.dropdown
                       },
                    },
                    atom_buttonPositive : {
                        text: model.buttonPositive.text,
                        onClick : model.buttonPositive.onClick
                    },
                    atom_image : {
                        src : model.image,
                        alt : model.alt
                    }
                    
                }
            }
            
        }
    }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
