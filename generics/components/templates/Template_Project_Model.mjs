import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Projects_Model ( model )
{
  const template_model = {
    view: model.view,
    components: {
      atom_heading4: {
        text: model.startHeading
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
          },
        ]
      }
    }
  };

  SEND_VIEWSTATE_TO_STATE( template_model );
}
