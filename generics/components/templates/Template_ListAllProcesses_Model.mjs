import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_ListAllProcesses_Model(model) { 
    const template_model = {
            view: model.view,
            components: {
            //    atom_heading4 : {
            //     text : model.startHeading
            //    },
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
                    },
                    atom_heading4 : {
                        text : model.heading
                    }, 
                },
                // atom_heading4 : {
                //     text : model.heading
                // },
                // molecule_inputAndButton : {
                //     atom_input : {
                //         type: model.inputType, 
                //         placeholder : model.inputPlaceholder
                //     },
                //     atom_buttonNeutral : {
                //         text : model.buttonNeutral.text,
                //         onClick : model.buttonNeutral.onClick
                //     }
                // },
                organism_listAll : {
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
                    },
                    // content : {
                    //     organism_processModal : {
                    //         molecule_modalProcParentBoxes: {
                    //             atom_heading4a : {
                    //                 text : model.boxParent1
                    //             },
                    //             atom_icon1 : {
                    //                 icon : model.icon6
                    //             },
                    //             atom_heading4b : {
                    //                 text : model.boxParent2
                    //             },
                    //             atom_icon2 : {
                    //                 icon : model.icon7
                    //             },
                    //             atom_heading4c : {
                    //                 text : model.boxParent3
                    //             },
                    //             atom_icon3 : {
                    //                 icon : model.icon8
                    //             }
                    //         },
                    //         molecule_modalInputProcOutput : {
                    //             lists1 : {
                    //                 atom_heading4 : {
                    //                     text : model.listHeading4
                    //                 },
                    //                 items : model.items2
                    //             },
                    //             atom_icon1 : {
                    //                 icon : model.icon9
                    //             },
                    //             atom_heading4 : {
                    //                 text : model.centerText
                    //             },
                    //             atom_text1 : {
                    //                 text : model.centerAbout
                    //             },
                    //             atom_icon2 : {
                    //                 icon : model.icon10
                    //             },
                    //             lists2 : {
                    //                 atom_heading4 : {
                    //                     text : model.listHeading5
                    //                 },
                    //                 items : model.items3
                    //             }
                    //         },
                    //         molecule_modalChildrenBoxes : {
                    //             atom_icon1 : {
                    //                 icon : model.icon11
                    //             },
                    //             atom_heading4a : {
                    //                 text : model.boxChild1
                    //             },
                    //             atom_icon2 : {
                    //                 icon : model.icon12
                    //             },
                    //             atom_heading4b : {
                    //                 text : model.boxChild2
                    //             },
                    //             atom_icon3 : {
                    //                 icon : model.icon13
                    //             },
                    //             atom_heading4c : {
                    //                 text : model.boxChild3
                    //             },
                    //         }
                    //     }
                    // }    
                },
                organism_processModal : {
                molecule_modalProcParentBoxes: {
                    atom_heading4a : {
                        text : model.boxParent1
                    },
                    atom_icon1 : {
                        icon : model.icon6
                    },
                    atom_heading4b : {
                        text : model.boxParent2
                    },
                    atom_icon2 : {
                        icon : model.icon7
                    },
                    atom_heading4c : {
                        text : model.boxParent3
                    },
                    atom_icon3 : {
                        icon : model.icon8
                    }
                },
                molecule_modalInputProcOutput : {
                    lists1 : {
                        atom_heading4 : {
                            text : model.listHeading4
                        },
                        items : model.items2
                    },
                    atom_icon1 : {
                        icon : model.icon9
                    },
                    atom_heading4 : {
                        text : model.centerText
                    },
                    atom_text1 : {
                        text : model.centerAbout
                    },
                    atom_icon2 : {
                        icon : model.icon10
                    },
                    lists2 : {
                        atom_heading4 : {
                            text : model.listHeading5
                        },
                        items : model.items3
                    }
                },
                molecule_modalChildrenBoxes : {
                    atom_icon1 : {
                        icon : model.icon11
                    },
                    atom_heading4a : {
                        text : model.boxChild1
                    },
                    atom_icon2 : {
                        icon : model.icon12
                    },
                    atom_heading4b : {
                        text : model.boxChild2
                    },
                    atom_icon3 : {
                        icon : model.icon13
                    },
                    atom_heading4c : {
                        text : model.boxChild3
                    },
                }
                },
                content : {
                    organism_processModal : {
                        molecule_modalProcParentBoxes: {
                            atom_heading4a : {
                                text : model.boxParent1
                            },
                            atom_icon1 : {
                                icon : model.icon6
                            },
                            atom_heading4b : {
                                text : model.boxParent2
                            },
                            atom_icon2 : {
                                icon : model.icon7
                            },
                            atom_heading4c : {
                                text : model.boxParent3
                            },
                            atom_icon3 : {
                                icon : model.icon8
                            }
                        },
                        molecule_modalInputProcOutput : {
                            lists1 : {
                                atom_heading4 : {
                                    text : model.listHeading4
                                },
                                items : model.items2
                            },
                            atom_icon1 : {
                                icon : model.icon9
                            },
                            atom_heading4 : {
                                text : model.centerText
                            },
                            atom_text1 : {
                                text : model.centerAbout
                            },
                            atom_icon2 : {
                                icon : model.icon10
                            },
                            lists2 : {
                                atom_heading4 : {
                                    text : model.listHeading5
                                },
                                items : model.items3
                            }
                        },
                        molecule_modalChildrenBoxes : {
                            atom_icon1 : {
                                icon : model.icon11
                            },
                            atom_heading4a : {
                                text : model.boxChild1
                            },
                            atom_icon2 : {
                                icon : model.icon12
                            },
                            atom_heading4b : {
                                text : model.boxChild2
                            },
                            atom_icon3 : {
                                icon : model.icon13
                            },
                            atom_heading4c : {
                                text : model.boxChild3
                            },
                        }
                    }
                }   
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
