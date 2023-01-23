import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";
import { Template_Login_View } from "./Template_Login_View.mjs";

export function Template_Login_Model(model) {
  const template_model1 = new Template_Login_View(model.view).props;
  console.log(template_model1, "template_model1");

  const template_model = {
    view: model.view,
    components: { template_model1 },
  };

  SEND_VIEWSTATE_TO_STATE(template_model);
}
