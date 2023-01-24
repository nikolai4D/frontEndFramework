import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";
import { Atom_Icon } from "../atoms/Atom_Icon.mjs";
import { Header } from "../atoms/Header.mjs";
import { Atom_Text1 } from "../atoms/Atom_Text1.mjs";
import { Molecule_Logo } from "../molecules/Molecule_Logo.mjs";
import { Organism_StartInfo } from "../organisms/Organism_StartInfo.mjs";
import { Organism_LoginOrSignup } from "../organisms/Organism_LoginOrSignup.mjs";
import { Molecule_LoginOrSignup } from "../molecules/Molecule_LoginOrSignup.mjs";
import { Molecule_HeaderAndText } from "../molecules/Molecule_HeaderAndText.mjs";
import { Atom_ButtonPositive } from "../atoms/Atom_ButtonPositive.mjs";
import { Atom_ButtonNeutral } from "../atoms/Atom_ButtonNeutral.mjs";

export function Template_Start_Model(model) { 
    const template_model = {
            view: model.view,
            components: {
                organism_startInfo : {
                    component: Organism_StartInfo,
                    molecule_logo : {
                        component: Molecule_Logo,
                        atom_icon : {
                            component: Atom_Icon,
                            icon : model.logoIcon
                        },
                        atom_heading4 : {
                            component: Header,
                            text : model.logoText,
                            importance: model.importance
                        }
                    },
                    molecule_headerAndText : {
                        component: Molecule_HeaderAndText,
                        atom_heading4 : {
                            component: Header,
                            text : model.startHeading,
                            importance: model.importance
                        },
                        atom_text1 : {
                            component: Atom_Text1,
                            text : model.startText
                        }
                    }
                },
                organism_loginOrSignup: {
                    component: Organism_LoginOrSignup,
                    molecule_loginOrSignup : {
                        component: Molecule_LoginOrSignup,
                        atom_buttonPositive : {
                            component: Atom_ButtonPositive,
                            text : model.buttonPositive.text,
                            onClick : model.buttonPositive.onClick
                        },
                        atom_text1: {
                            component: Atom_Text1,
                            text : model.text1
                        },
                        atom_buttonNeutral : {
                            component: Atom_ButtonNeutral,
                            text : model.buttonNeutral.text,
                            onClick : model.buttonNeutral.onClick
                        }
                    }
                }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
