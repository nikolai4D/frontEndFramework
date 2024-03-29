import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Search_Model(model) { 
    const template_model = {
            view: model.view,
            components: {
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
                    atom_heading4 : {
                        text : model.user
                    },
                    atom_buttonPositive : {
                        text : model.button.text,
                        onClick : model.button.onClick
                    }
                },
                atom_input : {
                    type: model.inputType,
                    placeholder: model.inputPlaceholder
                },
                atom_button : {
                    text: model.searchButtonText,
                    onClick: model.searchButtonClick
                },
                atom_heading4 : {
                    text : model.startHeading
                   },
                    searchResult : [{
                        atom_heading4 : {
                            text : model.headerResult,
                        },
                       atom_text1 : {
                            text : model.headerText
                       },
                    }, 
                    {
                        atom_heading4 : {
                            text : model.headerResult,
                        },
                       atom_text1 : {
                            text : model.headerText
                       },
                    },
                    {
                        atom_heading4 : {
                            text : model.headerResult,
                        },
                       atom_text1 : {
                            text : model.headerText
                       },
                    },
                    {
                        atom_heading4 : {
                            text : model.headerResult,
                        },
                       atom_text1 : {
                            text : model.headerText
                       },
                    },
                ],
              
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
