
import { toggleSortDirection } from"./sort/toggleSortDirection.js"
import { createModal } from"./createDomEl/createModal.js"
import { sortName } from "./sort/sortName.js";
import {sortByPriceAndCategory} from "./sort/sortByPriceAndCategory.js"
const list = document.querySelector("#list");


// 🔧 ВИПРАВЛЕНО: Рендеримо модалку одразу, один раз
const modal = document.querySelector("#modal");
modal.insertAdjacentHTML("beforeend", createModal());
sortByPriceAndCategory()


let previousValue = "";
const filterContainer = document.querySelector('#filter-container')
filterContainer.addEventListener("change", function(event){
  if(!event.target.value) return
  if (event.target.value === previousValue) return
  sortName(event.target)
})
const sortButtons = document.querySelector(".sort-buttons")
sortButtons.addEventListener("click", function(event){
  toggleSortDirection(event.target)
})
