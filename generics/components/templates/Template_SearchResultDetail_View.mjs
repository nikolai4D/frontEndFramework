import { Component } from "nd_frontend/core/Component.mjs";
import { State } from "nd_frontend/core/actions/State.mjs";
import { slot } from "nd_frontend/core/helpers.mjs";
import { SearchResultDetail } from "../organisms/Organism_SearchResultDetail.mjs";

export function Template_SearchResultDetail_View(view){
    
    Component.call(this)

    this.getHtml = function(){
        return `<div>
        ${slot("searchResultDetail")}
        </div>`
    }

    this.bindScript = function() {
        let model = State.views[view].components;
        let searchResultDetail = new SearchResultDetail(model.searchResultDetail)

        this.fillSlot("searchResultDetail", searchResultDetail.getElement())
    }
}