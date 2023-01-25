import {t_LoggedIn} from "../components/templates/T_LoggedIn.mjs";
import {m_Logo} from "../components/molecules/m_Logo.mjs";
import {a_Icon} from "../components/atoms/a_Icon.mjs";
import {m_HeaderAndText} from "../components/molecules/m_HeaderAndText.mjs";
import {a_Heading} from "../components/atoms/a_Heading.mjs";
import {a_Paragraph} from "../components/atoms/a__paragraph.mjs";
import {m_LoginOrSignup} from "../components/molecules/M_LoginOrSignup.mjs";
import {a_ButtonPositive} from "../components/atoms/A_ButtonPositive.mjs";
import {a_ButtonNeutral} from "../components/atoms/A_ButtonNeutral.mjs";
import {o_LoginOrSignup} from "../components/organisms/O_LoginOrSignup.mjs";
import {o_StartInfo} from "../components/organisms/O_StartInfo.mjs";

export const Model_Default_LoggedIn = {
            component: t_LoggedIn,
            subComponents: {
                organism_startInfo : {
                    component: o_StartInfo,
                    subComponents: {
                        top : {
                            component: m_Logo,
                            subComponents: {
                                icon : {
                                    component: a_Icon,
                                    options: {
                                        icon : "bi bi-person-circle"
                                    }
                                },
                                heading: {
                                    component: a_Heading,
                                    options: {
                                        text : "Brand",
                                        level: 4
                                    }
                                }
                            }
                        },
                        central : {
                            component: m_HeaderAndText,
                            subComponents: {
                                heading: {
                                    component: a_Heading,
                                    options: {
                                        text: "Welcome back!",
                                        level: 4
                                    }
                                },
                                text: {
                                    component: a_Paragraph,
                                    options: {
                                        text: "this is the text for a paragraph",
                                    }
                                }
                            }
                        }
                },
                organism_loginOrSignup: {
                    component: o_LoginOrSignup,
                    subComponents: {
                        molecule_loginOrSignup: {
                            component: m_LoginOrSignup,
                            subComponents: {
                                top_button: {
                                    component: a_ButtonPositive,
                                    options: {
                                        text: "A_Button positive",
                                        onClick: () => console.log("positive button clicked")
                                    }
                                },
                                text: {
                                    component: a_Paragraph,
                                    options: {
                                        text: "This is another paragraph"
                                    }
                                },
                                bottom_button: {
                                    component: a_ButtonNeutral,
                                    options: {
                                        text: "a_Button neutral",
                                        onClick: () => console.log("neutral button clicked")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
}
