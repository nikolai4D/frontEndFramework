import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_SearchResultDetail_Model(model) { 
    const searchResultDetail_model = {
            view: model.view,
            components: {
                headerAndText : {
                    atom_heading4 : { text: "Heading" },
                    atom_text1 : { text: "text" },
                },
                atom_image: { imgSrc: "imgSrc", alt: "alt" },
                molecule_headerAndList1 : {
                    atom_heading4 : { text: "Heading1" },
                    items : [{ text: "li text", icon: "bi bi-check icon-style" }, { text: "li text2", icon: "bi bi-check icon-style" }],
                },
                molecule_headerAndList2 : {
                    atom_heading4 : { text: "Heading2" },
                    items : [{ text: "li text", icon: "bi bi-check icon-style" }, { text: "li text2", icon: "bi bi-check icon-style" }],
                },
                molecule_headerAndList3 : {
                    atom_heading4 : { text: "Heading3" },
                    items : [{ text: "li text", icon: "bi bi-check icon-style" }, { text: "li text2", icon: "bi bi-check icon-style" }],
                },
                button : { text: "buttonText", onClick: null },
            }
        }

    SEND_VIEWSTATE_TO_STATE(searchResultDetail_model)
}
