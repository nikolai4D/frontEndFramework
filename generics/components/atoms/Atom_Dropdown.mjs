import {Component} from "../../../core/Component.mjs";

export function Atom_Dropdown(){
    Component.call(this)

    this.getHtml = function(){
        return`
        <div class="dropdown">
        <button class="dropbtn" data-dropdown_dropbtn>Dropdown<i data-dropdown_icon class="bi bi-caret-down-fill caret"></i></button>
        <div class="dropdown-padding"></div>
        <div class="dropdown-content">
          <a href="#">Dropdown item</a>
          <a href="#">Dropdown item</a>
          <a href="#">Dropdown item</a>
          <a href="#">Dropdown item</a>
        </div>
      </div>
     `

    }
    this.bindScript = function() {
        this.element.addEventListener("mouseover", () => {
            let caret = this.element.querySelector("[data-dropdown_icon]");
            caret.classList.add("bi-caret-up-fill");
            caret.classList.remove("bi-caret-down-fill");
        });
        this.element.addEventListener("mouseleave", () => {
            let caret = this.element.querySelector("[data-dropdown_icon]");
            caret.classList.add("bi-caret-down-fill");
            caret.classList.remove("bi-caret-up-fill");
        });

        let dropdown = this.element.querySelector("[data-dropdown_dropbtn]");


        for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            } else {
            dropdownContent.style.display = "block";
            }
        });  
        }
    }
}