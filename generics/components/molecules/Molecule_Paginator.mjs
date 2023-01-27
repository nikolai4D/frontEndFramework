import {Component} from "../../../core/Component.mjs";

export function Molecule_Paginator(model) {
    Component.call(this)

    this.numberOfPages = model.numberOfPages
    this.currentPage = model.currentPage
    this.pageNumberToDisplay = model.pageNumberToDisplay


    /**
     * @param {number} page
     */
    this.onPageNumberClick = model.onPageNumberClick

    this.setNumberRange = function() {
        let start = this.currentPage
        let end = this.currentPage + this.pageNumberToDisplay

        if (end > this.numberOfPages) {
            start = this.numberOfPages - this.pageNumberToDisplay
            end = this.numberOfPages
        }

        return {start, end}
    }

    this.getHtml = function() {
        let numberBtns = ''
        let {start, end} = this.setNumberRange()
        for (let i = start; i < end; i++) {
            numberBtns += `
                <span class="molecule_paginator--item" data-paginator_page="${i}">${i}</span>
            `
        }
        
        let startingDots = start > 1 ? '<span>...</span>' : ''
        let endingDots = end < this.numberOfPages ? '<span>...</span>' : ''

        return `
        <div class="molecule_paginator">
            <span class="molecule_paginator--item" data-paginator_previous>Prev</span>
            ${startingDots}
            ${numberBtns}
            ${endingDots}
            <span class="molecule_paginator--item" data-paginator_next>Next</span>
        </div>
        `
    }

    this.updatePage = function(newPageNumber) {
        this.currentPage = newPageNumber
        this.updateElement()
        if(this.onPageNumberClick) this.onPageNumberClick(this.currentPage)

        //Set the style of the button to bold, reset other buttons style
        for (let button of this.element.querySelectorAll("*[data-paginator_page]") ) {
            button.style.fontWeight = "normal"
            if(button.dataset.paginator_page == this.currentPage) button.style.fontWeight = "bold"
        }
        
    }
    
    this.bindScript = function() {
        
        for (let button of this.element.querySelectorAll("*[data-paginator_page]")) {
            button.addEventListener('click', ()=>{
                this.updatePage(button.dataset.paginator_page)
            })
        }
        
        this.element.querySelector("*[data-paginator_previous]").addEventListener('click', ()=>{
                if (this.currentPage > 1) this.updatePage(parseInt(this.currentPage)  - 1)
            })
        
        this.element.querySelector("*[data-paginator_next]").addEventListener('click', ()=>{
                if (this.currentPage < this.numberOfPages + 1) this.updatePage(parseInt(this.currentPage) + 1)
            })
    }
    
    
}