export function button(text, onCLick){
    return Object.assign({}, _component, _button, {
        text: text,
        onClick: onClick
    })
}

export const _button = {

}