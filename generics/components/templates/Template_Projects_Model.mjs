import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Projects_Model ( model )
{
  const template_model = {
      view: model.view,
      components: {

      organism_navbar : {
        organism_userProfileContent : {
          molecule_nameInput : {
              atom_text1 : {
                   text:model.userModal.nameInputText
              },
             atom_input : {
              type :model.userModal.nameInputType,
              placeholder:model.userModal.placeholderName
             },
          },
          molecule_emailInput : {
              atom_text1 : {
                   text:model.userModal.emailInputText
              },
             atom_input : {
              type :model.userModal.emailInputType,
              placeholder:model.userModal.placeholderEmail
             },
          },
          molecule_textAndDropdown : {
              atom_text1 : {
                   text:model.userModal.dropdownInputText
              },
             atom_dropdown : {
              dropdown:model.userModal.dropdown
             },
          },
          atom_buttonPositive : {
              text:model.userModal.buttonPositive.text,
              onClick :model.userModal.buttonPositive.onClick
          },
          atom_image : {
              src :model.userModal.image,
              alt :model.userModal.alt
          }
        },
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
            atom_heading4 : {
                text : model.user
            },
            atom_buttonPositive : {
              text: model.button.text,
              onClick : model.button.onClick
            }, 
      },
      Organism_ButtonFilledPictures: {
        btn: {
          text: model.btnText,
          onClick: model.onClick,
        }, 
        cards: [
        {
          atom_img: {
            imgSrc: model.cards[ 0 ].imgSrc,
            imgAlt: model.cards[ 0 ].imgAlt,
            text: model.cards[ 0 ].text,
          },
          atom_text1: {
            text: model.cards[ 0 ].text,
          }
        },
        {
          atom_img: {
            imgSrc: model.cards[ 1 ].imgSrc,
            imgAlt: model.cards[ 1 ].imgAlt,
            text: model.cards[ 1 ].text,
          },
          atom_text1: {
            text: model.cards[ 1 ].text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        },
        {
          atom_img: {
            imgSrc: model.imgSrc,
            imgAlt: model.imgAlt,
            text: model.text,
          },
          atom_text1: {
            text: model.text,
          }
        }
        ]
      },
      content : {
        organism_projectInfo : {
          molecule_headingAboutImage : {
            atom_heading4 : {
              text : model.projModalHeading
            },
            atom_text1 : {
              text : model.projModalAbout
            },
            atom_image : {
              src: model.projImageSrc,
              alt: model.projImageAlt
            }
          },
          molecule_projectState : {
            atom_text1 : {
              text : model.previousBox
            },
            atom_icon1 : {
              icon : model.icon6
            }, atom_text2 : {
              text : model.currentBox
            },
            atom_icon2 : {
              icon : model.icon7
            },
            atom_text3 : {
              text : model.nextBox
            }
          },
          molecule_listCheckbox1 :{
            atom_heading4 : {
              text : model.subHeading1
            },
            items: model.items1
          },
          molecule_listCheckbox2 :{
            atom_heading4 : {
              text : model.subHeading2
            },
            items : model.items2
          },
          atom_buttonPositive : {
            text : model.buttonPositive.text,
            onClick : model.buttonPositive.onClick
          }
        }
      },
      content2 : {
        organism_btn_positive_add_proj : {
          molecule_text_input1: {
            atom_text1 : {
              text : model.modalHeading1
            },
            atom_input : {
              type : model.inputType1,
              placeholder : model.modalInput1 
            }
          },
          molecule_text_input2 : {
            atom_text1 : {
              text : model.modalHeading2
            },
            atom_input : {
              type : model.inputType2,
              placeholder : model.modalInput2 
            }
          },
          molecule_text_dropdown : {
            atom_text1 : {
              text : model.modalHeading3
            },
            atom_dropdown : {
              text : model.text
            }
          },
          atom_image : {
            src : model.modalImage.src,
            alt : model.modalImage.alt
          },
          atom_button_positive : {
            text : model.buttonPositive.text,
            onClick : model.buttonPositive.onClick
          }
        }
      },
    }
  };

  SEND_VIEWSTATE_TO_STATE( template_model );
}
