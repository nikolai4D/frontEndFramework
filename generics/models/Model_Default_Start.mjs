import {t_Split} from "../components/templates/T_Split.mjs";
import {m_Logo} from "../components/molecules/m_Logo.mjs";
import {a_Icon} from "../components/atoms/a_Icon.mjs";
import {m_HeaderAndText} from "../components/molecules/m_HeaderAndText.mjs";
import {a_Heading} from "../components/atoms/a_Heading.mjs";
import {a_Paragraph} from "../components/atoms/a__paragraph.mjs";
import {m_FormOrOther} from "../components/molecules/M_FormOrOther.mjs";
import {o_StartInfo} from "../components/organisms/o_StartInfo.mjs";
import {a_Button} from "../components/atoms/a__button.mjs";


export const Model_Default_Start = {
    componentType: t_Split,
    subComponents: {
        left_panel : {
            componentType: o_StartInfo,
            subComponents: {
                top: {
                    componentType: m_Logo,
                    subComponents: {
                        icon: {
                            componentType: a_Icon,
                            options: {
                                icon: "bi bi-person-circle"
                            }
                        },
                        heading: {
                            componentType: a_Heading,
                            options: {
                                text: "Brand",
                                level: 4
                            }
                        }
                    }
                },
                central: {
                    componentType: m_HeaderAndText,
                    subComponents: {
                        heading: {
                            componentType: a_Heading,
                            options: {
                                text: "Welcome back!",
                                level: 4
                            }
                        },
                        text: {
                            componentType: a_Paragraph,
                            options: {
                                text: "this is the text for a paragraph",
                            }
                        }
                    }
                }
            },
        },
        right_panel: {
            componentType: m_FormOrOther,
            subComponents: {
                top_button: {
                    componentType: a_Button,
                    options: {
                        text: "A_Button positive",
                        cssClasses: "atom_button-positive",
                        onClick: () => console.log("positive button clicked")
                    }
                },
                text: {
                    componentType: a_Paragraph,
                    options: {
                        text: "This is another paragraph"
                    }
                },
                bottom_button: {
                    componentType: a_Button,
                    options: {
                        text: "a_Button neutral",
                        cssClasses: "atom_button-neutral",
                        onClick: () => console.log("neutral button clicked")
                    }
                }
            }
        }
    }
}
