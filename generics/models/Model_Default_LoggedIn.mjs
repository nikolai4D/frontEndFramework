import {Template_Loggedin} from "../components/templates/Template_Loggedin.mjs";
import {Molecule_Logo} from "../components/molecules/Molecule_Logo.mjs";
import {Atom_Icon} from "../components/atoms/Atom_Icon.mjs";
import {Molecule_HeaderAndText} from "../components/molecules/Molecule_HeaderAndText.mjs";
import {Header} from "../components/atoms/Header.mjs";
import {Paragraph} from "../components/atoms/Paragraph.mjs";
import {Molecule_LoginOrSignup} from "../components/molecules/Molecule_LoginOrSignup.mjs";
import {Atom_ButtonPositive} from "../components/atoms/Atom_ButtonPositive.mjs";
import {Atom_ButtonNeutral} from "../components/atoms/Atom_ButtonNeutral.mjs";
import {Organism_LoginOrSignup} from "../components/organisms/Organism_LoginOrSignup.mjs";
import {Organism_StartInfo} from "../components/organisms/Organism_StartInfo.mjs";

export const Model_Default_LoggedIn = {
            component: Template_Loggedin,
            subComponents: {
                organism_startInfo : {
                    component: Organism_StartInfo,
                    subComponents: {
                        molecule_logo : {
                            component: Molecule_Logo,
                            subComponents: {
                                icon : {
                                    component: Atom_Icon,
                                    options: {
                                        icon : "bi bi-person-circle"
                                    }
                                },
                                heading : {
                                    component: Header,
                                    options: {
                                        text : "Brand"
                                    }
                                }
                            }
                        },
                        molecule_headerAndText : {
                            component: Molecule_HeaderAndText,
                            subComponents: {
                                heading: {
                                    component: Header,
                                    options: {
                                        text: "Welcome back!"
                                    }
                                },
                                atom_text1: {
                                    component: Paragraph,
                                    options: {
                                        text: "this is the text for a paragraph"
                                    }
                                }
                            }
                        }
                },
                organism_loginOrSignup: {
                    component: Organism_LoginOrSignup,
                    subComponents: {
                        molecule_loginOrSignup: {
                            component: Molecule_LoginOrSignup,
                            subComponents: {
                                atom_buttonPositive: {
                                    component: Atom_ButtonPositive,
                                    options: {
                                        text: "Button positive",
                                        onClick: () => console.log("positive button clicked")
                                    }
                                },
                                atom_text1: {
                                    component: Paragraph,
                                    options: {
                                        text: "This is another paragraph"
                                    }
                                },
                                atom_buttonNeutral: {
                                    component: Atom_ButtonNeutral,
                                    options: {
                                        text: "Button neutral",
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
