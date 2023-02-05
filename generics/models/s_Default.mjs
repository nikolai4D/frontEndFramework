export const s_Default = {
    constructorKey: "t_Split",
    options: {},
    subComponents: {
        left_panel : {
            constructorKey: "o_StartInfo",
            subComponents: {
                top: {
                    constructorKey: "m_Logo",
                    subComponents: {
                        icon: {
                            constructorKey: "a_Icon",
                            options: {
                                icon: "bi bi-person-circle"
                            }
                        },
                        heading: {
                            constructorKey: "a_Heading",
                            options: {
                                text: "Brand",
                                level: 4
                            }
                        }
                    }
                },
                central: {
                    constructorKey: "m_HeaderAndText",
                    subComponents: {
                        heading: {
                            constructorKey: "a_Heading",
                            options: {
                                text: "Welcome back!",
                                level: 4
                            }
                        },
                        text: {
                            constructorKey: "a_Paragraph",
                            options: {
                                text: "this is the text for a paragraph",
                            }
                        }
                    }
                }
            },
        },
        right_panel: {
            constructorKey: "m_FormOrOther",
            subComponents: {
                top_button: {
                    constructorKey: "a_Button",
                    options: {
                        text: "A_Button positive",
                        cssClasses: "atom_button-positive",
                        onClick: () => console.log("positive button clicked")
                    }
                },
                text: {
                    constructorKey: "a_Paragraph",
                    options: {
                        text: "This is another paragraph"
                    }
                },
                bottom_button: {
                    constructorKey: "a_Button",
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
