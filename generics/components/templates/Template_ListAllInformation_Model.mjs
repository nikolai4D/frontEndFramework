import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";
import {
    Organism_ListDetailInformation
} from "nd_frontend/generics/components/organisms/Organism_ListDetailsInformation.mjs";
import {Modal} from "nd_frontend/generics/components/organisms/Modal.mjs";

export function Template_ListAllInformation_Model(model) { 
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
                    lists : [
                        {
                            atom_heading4 : {
                                text : model.listHeading1
                            },
                            items : model.itemsA
                        },
                        {
                            atom_heading4 : {
                                text : model.listHeading2
                            },
                            items : model.itemsB
                        },
                        {
                            atom_heading4 : {
                                text : model.listHeading3
                            },
                            items : model.itemsC
                        }
                    ]
                },
                informationDetailModal: model.informationDetailModal,
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}

function popInformationModal(infoDetailModel){
    let infoDetail = new Organism_ListDetailInformation(infoDetailModel)
    let modal = new Modal(infoDetail)
    modal.show()
}