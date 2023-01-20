import {Component} from "../../../core/Component.mjs";

/**
 *
 * @param key the key corresponding to the icon in the icons map, in icon.mjs
 * @param onClick
 * @constructor
 */
export function Icon(data) {
    Component.call(this)

    this.onClick = data?.onClick
    this.key = data.key

    this.getHtml = function() {
        const iconString = iconsMap.get(this.key)
        if(!iconString) throw new Error("Icon not found")
        return iconString
    }

    this.bindScript = function() {
        if(this.onClick) this.getElement().addEventListener("click", this.onClick)
    }

    function makeIconhtml(iconName) { return `<i class="bi bi-${iconName} icon-style ${data?.class ?? ""}"></i>`}

    const iconsMap = new Map([
        ["check", makeIconhtml("check")],
        ["expander-expand", makeIconhtml("chevron-right")],
        ["expander-collapse", makeIconhtml("chevron-left")],
        ["home", makeIconhtml("house-door-fill")],
        ["search", makeIconhtml("search")],
        ["project", makeIconhtml("folder-fill")],
        ["map", makeIconhtml("map-fill")],
        ["org", makeIconhtml("0-square-fill")],
        ["process", makeIconhtml("p-square-fill")],
        ["info", makeIconhtml("info-square-fill")],
        ["cloud-plus", makeIconhtml("cloud-plus-fill")],
        ["account", makeIconhtml("person-fill")],
        ["logout", makeIconhtml("box-arrow-right")],
    ])
}