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
                   text: model.nameInputText
              },
             atom_input : {
              type : model.nameInputType,
              placeholder: model.placeholderName
             },
          },
          molecule_emailInput : {
              atom_text1 : {
                   text: model.emailInputText
              },
             atom_input : {
              type : model.emailInputType,
              placeholder: model.placeholderEmail
             },
          },
          molecule_textAndDropdown : {
              atom_text1 : {
                   text: model.dropdownInputText
              },
             atom_dropdown : {
              dropdown: model.dropdown
             },
          },
          atom_buttonPositive : {
              text: model.buttonPositive.text,
              onClick : model.buttonPositive.onClick
          },
          atom_image : {
              src : model.image,
              alt : model.alt
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
    /* atom_heading4 : {
      text : model.user
  },
  atom_button : {
      text : model.button.text,
      onClick : model.button.onClick
  }, */
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
          },
        ]
      }
    }
  };

  SEND_VIEWSTATE_TO_STATE( template_model );
}
