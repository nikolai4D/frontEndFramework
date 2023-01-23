import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";
import { modelView } from "./Template_Login_View.mjs";

export function Template_Login_Model(model) {
  const test = JSON.parse(modelView);
  console.log(test, "TEST");

  const template_model = {
    view: model.view,
    components: {
      organism_startInfo: {
        molecule_logo: {
          atom_icon: {
            icon: model.logoIcon,
          },
          atom_heading4: {
            text: model.logoText,
          },
        },
        molecule_headerAndText: {
          atom_heading4: {
            text: model.startHeading,
          },
          atom_text1: {
            text: model.startText,
          },
        },
      },
      organism_loginForm: {
        molecule_loginForm: {
          atom_input: {
            type: model.inputType,
            placeholder: model.inputPlaceholder,
          },
          atom_buttonPositive: {
            text: model.buttonPositive.text,
            onClick: model.buttonPositive.onClick,
          },
        },
      },
    },
  };

  SEND_VIEWSTATE_TO_STATE(template_model);
}
