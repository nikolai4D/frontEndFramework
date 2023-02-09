import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_SearchResult_Model(model) { 
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
                    atom_button : {
                        text : model.button.text,
                        onClick : model.button.onClick
                    }
                },
                atom_input : {
                    type: model.inputType,
                    placeholder: model.inputPlaceholder,
                },
                atom_button : {
                    text : model.btnText,
                    onClick : model.onClick
                },
                informationResult : {
                    atom_heading4 : {
                        text : model.informationHeader,
                    },
                    atom_icon : {
                        icon: model.informationIcon
                    },
                   atom_text1 : {
                        text : model.informationText
                   },},
                   processResult : {
                   atom_heading4 : {
                    text : model.processHeader,
                    },
                    atom_icon : {
                        icon: model.processIcon
                    },
                    atom_text1 : {
                        text : model.processText
                    },
                },
                organisationResult : {
                    atom_heading4 : {
                        text : model.organisationHeader,
                    },
                    atom_icon : {
                        icon: model.organisationIcon
                    },
                    atom_text1 : {
                        text : model.organisationText
                    },
                },
                molecule_paginator : {
                    onPageNumberClick : model.paginator.onPageNumberClick, 
                    numberOfPages : model.paginator.numberOfPages,
                    currentPage : model.paginator.currentPage,
                    pageNumberToDisplay : model.paginator.pageNumberToDisplay
                },
                content : {
                    organism_searchResultDetail : {
                        molecule_headerAndText : {
                            atom_heading4 : {
                                text : model.heading
                            },
                            atom_text1 : {
                                text: model.infoText 
                            }
                        },
                        atom_image : {
                            src : model.src,
                            alt : model.alt
                        },
                        molecule_list1 : {
                            atom_heading4 : {
                                text : model.listInfo
                            },
                            items: [
                                {text: "List item"},
                                {text: "List item"},
                                {text: "List item"},
                                {text: "List item"},
                                {text: "List item"},
                            ]
                        },
                        molecule_list2 : {
                            atom_heading4 : {
                                text : model.listProcess
                            },
                            items: [
                                {text: "List item"},
                                {text: "List item"},
                                {text: "List item"},
                                {text: "List item"},
                                {text: "List item"},
                            ]
                        },
                        molecule_list3 : {
                            atom_heading4 : {
                                text : model.listOrg
                            },
                            items: [
                                {text: "List item"},
                                {text: "List item"},
                                {text: "List item"},
                                {text: "List item"},
                                {text: "List item"},
                            ]
                        }
                    },
                    atom_buttonPositive : {
                        text: model.buttonPositive.text
                    },
                    organism_addToProject : {
                        molecule_textAndDropDown1 : {
                            atom_text1 : {
                                text : model.projHeader
                            },
                            atom_dropdown : {
                                text : model.dropdown
                            }
                        },
                        molecule_textAndDropDown2 : {
                            atom_text1 : {
                                text : model.infoHeader
                            },
                            atom_dropdown : {
                                text : model.dropdown
                            }
                        },
                        molecule_textAndDropDown3 : {
                            atom_text1 : {
                                text : model.proHeader
                            },
                            atom_dropdown : {
                                text : model.dropdown
                            }
                        },
                        molecule_textAndDropDown4 : {
                            atom_text1 : {
                                text : model.orgHeader
                            },
                            atom_dropdown : {
                                text : model.dropdown
                            }
                        },
                        atom_buttonPositive : {
                            text : model.buttonPositive.text,
                            onClick : model.buttonPositive.onClick
                        }
                    }

            }
                
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
