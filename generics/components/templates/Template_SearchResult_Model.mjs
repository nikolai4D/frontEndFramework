import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_SearchResult_Model(model) { 
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
                    }
                },
                atom_button :{
                    text: model.buttonPositive1.text,
                    onClick : model.buttonPositive1.onClick
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
                        text: model.buttonPositive.text,
                        onClick : model.buttonPositive.onClick
                    }
                }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
