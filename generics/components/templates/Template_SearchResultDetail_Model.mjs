import { SEND_VIEWSTATE_TO_STATE } from "../../../core/actions/action_send_view_state.mjs";

export function Template_SearchResultDetail_Model(model) { 
    const searchResultDetail_model = {
            view: model.view,
            components: {
                headerAndText : {
                    atom_heading4 : { text: model.headAndTextHeading },
                    atom_text1 : { text: model.headAndTextText },
                },
                atom_image: { imgSrc: model.imgSrc, alt: model.imgAlt },
                molecule_headerAndList1 : {
                    atom_heading4 : { text: model.headerAndList1Heading },
                    items : [{ text: model.headerAndList1Item1, icon: model.headerAndList1Icon1 }, 
                             { text: model.headerAndList1Item2, icon: model.headerAndList1Icon2 }],
                },
                molecule_headerAndList2 : {
                    atom_heading4 : { text: model.headerAndList2Heading },
                    items : [{ text: model.headerAndList2Item1, icon: model.headerAndList2Icon1 }, 
                             { text: model.headerAndList2Item2, icon: model.headerAndList2Icon2 }],
                },
                molecule_headerAndList3 : {
                    atom_heading4 : { text: model.headerAndList1Heading },
                    items : [{ text: model.headerAndList3Item1, icon: model.headerAndList3Icon1 }, 
                             { text: model.headerAndList3Item2, icon: model.headerAndList3Icon2 }],
                },
                button : { text: model.buttonText, onClick: model.buttonOnClick },
            }
        }

    SEND_VIEWSTATE_TO_STATE(searchResultDetail_model)
}
