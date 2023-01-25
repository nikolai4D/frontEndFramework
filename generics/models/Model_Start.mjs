import { SEND_VIEWSTATE_TO_STATE } from "../../core/actions/action_send_view_state.mjs";
import { a_Icon } from "../components/atoms/a_Icon.mjs";
import { a_Heading } from "../components/atoms/a_Heading.mjs";
import { Atom_Text1 } from "../components/atoms/Atom_Text1.mjs";
import { m_Logo } from "../components/molecules/m_Logo.mjs";
import { o_StartInfo } from "../components/organisms/O_StartInfo.mjs";
import { o_LoginOrSignup } from "../components/organisms/O_LoginOrSignup.mjs";
import { m_LoginOrSignup } from "../components/molecules/M_LoginOrSignup.mjs";
import { m_HeaderAndText } from "../components/molecules/m_HeaderAndText.mjs";
import { a_ButtonPositive } from "../components/atoms/A_ButtonPositive.mjs";
import { a_ButtonNeutral } from "../components/atoms/A_ButtonNeutral.mjs";

export function Model_Start(model) {
    const template_model = {
            view: model.view,
            components: {
                organism_startInfo : {
                    component: o_StartInfo,
                    molecule_logo : {
                        component: m_Logo,
                        atom_icon : {
                            component: a_Icon,
                            icon : model.logoIcon
                        },
                        atom_heading4 : {
                            component: a_Heading,
                            text : model.logoText,
                            importance: model.importance
                        }
                    },
                    molecule_headerAndText : {
                        component: m_HeaderAndText,
                        atom_heading4 : {
                            component: a_Heading,
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
                    component: o_LoginOrSignup,
                    molecule_loginOrSignup : {
                        component: m_LoginOrSignup,
                        atom_buttonPositive : {
                            component: a_ButtonPositive,
                            text : model.buttonPositive.text,
                            onClick : model.buttonPositive.onClick
                        },
                        atom_text1: {
                            component: Atom_Text1,
                            text : model.text1
                        },
                        atom_buttonNeutral : {
                            component: a_ButtonNeutral,
                            text : model.buttonNeutral.text,
                            onClick : model.buttonNeutral.onClick
                        }
                    }
                }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
