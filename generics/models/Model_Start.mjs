import { SEND_VIEWSTATE_TO_STATE } from "../../core/actions/action_send_view_state.mjs";
import { a_Icon } from "../components/atoms/a_Icon.mjs";
import { a_Heading } from "../components/atoms/a_Heading.mjs";
import { Atom_Text1 } from "../components/atoms/Atom_Text1.mjs";
import { m_Logo } from "../components/molecules/m_Logo.mjs";
import { o_StartInfo } from "../components/organisms/o_StartInfo.mjs";
import { o_LoginOrSignup } from "../components/organisms/o_LoginOrSignup.mjs";
import { m_FormOrOther } from "../components/molecules/m_FormOrOther.mjs";
import { m_HeaderAndText } from "../components/molecules/m_HeaderAndText.mjs";
import { a_ButtonPositive } from "../components/atoms/A_ButtonPositive.mjs";
import { a_ButtonNeutral } from "../components/atoms/A_ButtonNeutral.mjs";

export function Model_Start(model) {
    const template_model = {
            view: model.view,
            components: {
                organism_startInfo : {
                    component: "StartInfo",
                    molecule_logo : {
                        component: "Logo",
                        atom_icon : {
                            component: "Icon",
                            icon : model.logoIcon
                        },
                        atom_heading4 : {
                            component: "Heading",
                            text : model.logoText,
                            importance: model.importance
                        }
                    },
                    molecule_headerAndText : {
                        component: "HeaderAndText",
                        atom_heading4 : {
                            component: "Heading",
                            text : model.startHeading,
                            importance: model.importance
                        },
                        atom_text1 : {
                            component: "Text1",
                            text : model.startText
                        }
                    }
                },
                organism_loginOrSignup: {
                    component: "LoginOrSignup",
                    molecule_loginOrSignup : {
                        component: "FormOrOther",
                        atom_buttonPositive : {
                            component: "ButtonPositive",
                            text : model.buttonPositive.text,
                            onClick : model.buttonPositive.onClick
                        },
                        atom_text1: {
                            component: "Text1",
                            text : model.text1
                        },
                        atom_buttonNeutral : {
                            component: "ButtonNeutral",
                            text : model.buttonNeutral.text,
                            onClick : model.buttonNeutral.onClick
                        }
                    }
                }
            }
        }

    SEND_VIEWSTATE_TO_STATE(template_model)
}
