import {t_Split} from "../components/templates/t_Split.mjs";
import {m_Logo} from "../components/molecules/m_Logo.mjs";
import {a_Icon} from "../components/atoms/a_Icon.mjs";
import {m_HeaderAndText} from "../components/molecules/m_HeaderAndText.mjs";
import {a_Heading} from "../components/atoms/a_Heading.mjs";
import {a_Paragraph} from "../components/atoms/a_Paragraph.mjs";
import {m_FormOrOther} from "../components/molecules/m_FormOrOther.mjs";
import {o_StartInfo} from "../components/organisms/o_StartInfo.mjs";
import {a_Button} from "../components/atoms/a_Button.mjs";


export const Model_Default_Start = {
    componentType: "Split",
    subComponents: {
        left_panel : {
            componentType: "StartInfo",
            subComponents: {
                top: {
                    componentType: "Logo",
                    subComponents: {
                        icon: {
                            componentType: "Icon",
                            options: {
                                icon: "bi bi-person-circle"
                            }
                        },
                        heading: {
                            componentType: "Heading",
                            options: {
                                text: "Brand",
                                level: 4
                            }
                        }
                    }
                },
                central: {
                    componentType: "HeaderAndText",
                    subComponents: {
                        heading: {
                            componentType: "Heading",
                            options: {
                                text: "Welcome back!",
                                level: 4
                            }
                        },
                        text: {
                            componentType: "Paragraph",
                            options: {
                                text: "this is the text for a paragraph",
                            }
                        }
                    }
                }
            },
        },
        right_panel: {
            componentType: "FormOrOther",
            subComponents: {
                top_button: {
                    componentType: "Button",
                    options: {
                        text: "A_Button positive",
                        cssClasses: "atom_button-positive",
                        onClick: () => console.log("positive button clicked")
                    }
                },
                text: {
                    componentType: "Paragraph",
                    options: {
                        text: "This is another paragraph"
                    }
                },
                bottom_button: {
                    componentType: "Button",
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
