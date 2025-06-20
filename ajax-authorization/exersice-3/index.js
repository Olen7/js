import { getCategories, getProductByCategories } from "./api/getGategories.js";
const categories = document.querySelector("#categories");
const loadMoreBtn = document.querySelector("#load-more");
const loadMoreCategories = document.querySelector("#load-more-categories")

let page = 1;
async function renderCategories() {
  const { data: body, error } = await getCategories({ limit: 3, page });
  if (error) {
   return categories.insertAdjacentHTML(
      "beforebegin",
      `<p class="error">Щось пішло не так!</p>`
    );
  }
  
  const { total, totalPages} = body;
  const list = body.data
    .map((el) => `<li class="listItem" data-id="${el.id}">${el.title}</li>`)
    .join("");
  categories.insertAdjacentHTML("beforeend", list);

  if (totalPages > page) {
    loadMoreBtn.classList.remove("hidden");
    page += 1
    
  }else{
    loadMoreBtn.classList.add("hidden");
  }
  return;
}
renderCategories();
loadMoreBtn.addEventListener("click", renderCategories)




categories.addEventListener("click", function (event) {
  if (!event.target.classList.contains("listItem")) return;
  const { id } = event.target.dataset;
  getProductByCategoriesById(event, id)
});
let pageCategories = 1;
async function getProductByCategoriesById(event) {
    const { data: body, error } = await getCategories({ limit: 3, pageCategories, });
    if (error) {
   return categories.insertAdjacentHTML(
      "beforebegin",
      `<p class="error">Щось пішло не так!</p>`
    );
  }
   const detailsBlock = event.target.querySelectorAll(".product-list");
    if (detailsBlock.length) {
      detailsBlock.forEach((el) => el.remove());
      return;
    }
    const { total, totalPages} = body;
    const productList = body.data
      .map((el) => `<p class="product-list">${el.title}</p>`)
      .join("");
    event.target.insertAdjacentHTML("beforeend", productList);
    event.target.insertAdjacentHTML("beforeend", `<button class="hidden-categories btn-categories" id="load-more-categories">Показати більше</button>`)
    if (totalPages > page) {
    loadMoreCategories.classList.remove("hidden");
    page += 1
    
  }else{
    loadMoreCategories.classList.add("hidden");
  }
} 