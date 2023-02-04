import {a_Button} from "../generics/components/atoms/a_Button.mjs";
import {a_Heading} from "../generics/components/atoms/a_Heading.mjs";
import {a_Icon} from "../generics/components/atoms/a_Icon.mjs";
import {a_Paragraph} from "../generics/components/atoms/a_Paragraph.mjs";
import {m_HeaderAndText} from "../generics/components/molecules/m_HeaderAndText.mjs";
import {m_Logo} from "../generics/components/molecules/m_Logo.mjs";
import {m_FormOrOther} from "../generics/components/molecules/m_FormOrOther.mjs";
import {o_StartInfo} from "../generics/components/organisms/o_StartInfo.mjs";
import {t_Split} from "../generics/components/templates/t_Split.mjs";


export const componentsMap = new Map([
    ["Button", a_Button],
    ["Heading", a_Heading],
    ["Paragraph", a_Paragraph],
    ["Icon", a_Icon],
    ["Logo", m_Logo],
    ["HeaderAndText", m_HeaderAndText],
    ["FormOrOther", m_FormOrOther],
    ["StartInfo", o_StartInfo],
    ["Split", t_Split],
])