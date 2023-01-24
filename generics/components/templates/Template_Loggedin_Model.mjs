import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_Loggedin_Model ( model )
{
    const template_model = {
        view: model.view,
        components: {
            organism_SideBar: {
                searchIcon: {
                    icon: model.searchIcon
                },
                searchText: {
                    text: model.searchText
                },
                projectsIcon: {
                    icon: model.projectsIcon
                },
                projectsText: {
                    text: model.projectsText
                },
                adminIcon: {
                    icon: model.adminIcon
                },
                adminText: {
                    text: model.adminText
                },
            },
            molecule_headerAndText: {
                atom_heading4: {
                    text: model.startHeading
                },
                atom_text1: {
                    text: model.startText
                }
            }
        }
    };

    SEND_VIEWSTATE_TO_STATE( template_model );
}
