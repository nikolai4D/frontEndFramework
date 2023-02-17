import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_ListAllOrganisation_Model(model) { 
    const template_model = {
            view: model.view,
            components: {
               atom_heading4 : {
                text : model.startHeading
               },
               organism_navbar : {
                organism_userProfileContent : {
                    molecule_nameInput : {
                        atom_text1 : {
                             text:model.userModal.nameInputText
                        },
                       atom_input : {
                        type :model.userModal.nameInputType,
                        placeholder:model.userModal.placeholderName
                       },
                    },
                    molecule_emailInput : {
                        atom_text1 : {
                             text:model.userModal.emailInputText
                        },
                       atom_input : {
                        type :model.userModal.emailInputType,
                        placeholder:model.userModal.placeholderEmail
                       },
                    },
                    molecule_textAndDropdown : {
                        atom_text1 : {
                             text:model.userModal.dropdownInputText
                        },
                       atom_dropdown : {
                        dropdown:model.userModal.dropdown
                       },
                    },
                    atom_buttonPositive : {
                        text:model.userModal.buttonPositive.text,
                        onClick :model.userModal.buttonPositive.onClick
                    },
                    atom_image : {
                        src :model.userModal.image,
                        alt :model.userModal.alt
                    }
                  },
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
                            text : model.link1.text,
                            onClick: model.link1.onClick
                        }
                    },
                    molecule_iconAndLink2 : {
                        atom_icon : {
                            icon : model.icon2
                        },
                        atom_link : {
                            text : model.link2.text,
                            onClick: model.link2.onClick
                        }
                    },
                    molecule_iconAndLink3 : {
                        atom_icon : {
                            icon : model.icon3
                        },
                        atom_link : {
                            text : model.link3.text,
                            onClick: model.link3.onClick
                        }
                    },
                    molecule_iconAndLink4 : {
                        atom_icon : {
                            icon : model.icon4
                        },
                        atom_link : {
                            text : model.link4.text,
                            onClick: model.link4.onClick
                        }
                    },
                    molecule_iconAndLink5 : {
                        atom_icon : {
                            icon : model.icon5
                        },
                        atom_link : {
                            text : model.link5.text,
                            onClick: model.link5.onClick
                            
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
                    atom_buttonPositive : {
                        text : model.button.text,
                        onClick : model.button.onClick
                    }
                },organism_listAll : {
                    atom_heading4 : {
                        text : model.heading
                    },
                    atom_input : {
                        type : model.inputType,
                        placeholder : model.inputPlaceholder
                    },
                    atom_button_positive : {
                        text : model.buttonNeutral.text,
                        onClick : model.buttonNeutral.onClick
                    },
                    lists1 : {
                        atom_heading4 : {
                            text : model.listHeading1
                        },
                        items : model.items
                    },
                    lists2 : {
                        atom_heading4 : {
                            text : model.listHeading2
                        },
                        items : model.items
                    },
                    lists3 : {
                        atom_heading4 : {
                            text : model.listHeading3
                        },
                        items : model.items
                    }   
                }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
