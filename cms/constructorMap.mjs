import {a_Button} from "../generics/components/atoms/a_Button.mjs";
import {a_Heading} from "../generics/components/atoms/a_Heading.mjs";
import {a_Icon} from "../generics/components/atoms/a_Icon.mjs";
import {a_Paragraph} from "../generics/components/atoms/a_Paragraph.mjs";
import {m_HeaderAndText} from "../generics/components/molecules/m_HeaderAndText.mjs";
import {m_Logo} from "../generics/components/molecules/m_Logo.mjs";
import {m_FormOrOther} from "../generics/components/molecules/m_FormOrOther.mjs";
import {o_StartInfo} from "../generics/components/organisms/o_StartInfo.mjs";
import {a_Placeholder} from "../generics/components/atoms/a_Placeholder.mjs";
import {t_Central} from "../generics/components/templates/t_Central.mjs";
import {t_Default} from "../generics/components/templates/t_Default.mjs";
import {t_Login} from "../generics/components/templates/t_Login.mjs";
import {t_Signup} from "../generics/components/templates/t_Signup.mjs";
import {t_Split} from "../generics/components/templates/t_Split.mjs";
import {t_Start} from "../generics/components/templates/t_Start.mjs";
import { o_Table } from "../generics/components/organisms/o_Table.mjs";
import { o_SignupForm } from "../generics/components/organisms/o_SignupForm.mjs";
import { o_NavBar } from "../generics/components/organisms/o_NavBar.mjs";
import { o_Modal } from "../generics/components/organisms/o_Modal.mjs";
import { o_LoginOrSignup } from "../generics/components/organisms/o_LoginOrSignup.mjs";
import { o_LoginForm } from "../generics/components/organisms/o_LoginForm.mjs";
import { m_SignupForm } from "../generics/components/molecules/m_SignupForm.mjs";
import { m_InputField } from "../generics/components/molecules/m_InputField.mjs";
import { a_Link } from "../generics/components/atoms/a_Link.mjs";
import { a_Input } from "../generics/components/atoms/a_Input.mjs";


export const constructorMap = new Map([
    ["a_Button", a_Button],
    ["a_Heading", a_Heading],
    ["a_Icon", a_Icon],
    ["a_Input", a_Input],
    ["a_Link", a_Link],
    ["a_Paragraph", a_Paragraph],
    ["a_Placeholder", a_Placeholder],
    ["m_FormOrOther", m_FormOrOther],
    ["m_HeaderAndText", m_HeaderAndText],
    ["m_InputField", m_InputField],
    ["m_Logo", m_Logo],
    ["m_SignupForm", m_SignupForm],
    ["o_LoginForm", o_LoginForm],
    ["o_LoginOrSignup", o_LoginOrSignup],
    ["o_Modal", o_Modal],
    ["o_NavBar", o_NavBar],
    ["o_SignupForm", o_SignupForm],
    ["o_StartInfo", o_StartInfo],
    ["o_Table", o_Table],
    ["t_Central", t_Central],
    ["t_Default", t_Default],
    ["t_Login", t_Login],
    ["t_Signup", t_Signup],
    ["t_Split", t_Split],
    ["t_Start", t_Start],
])