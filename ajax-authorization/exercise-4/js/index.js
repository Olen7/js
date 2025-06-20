/*
 1. Під час завантаження сторінки зроби запит на адресу "https://pet-shop-backend-swd8.onrender.com/categories/all" и виведіть
 назви усіх категорій у списку.
 2. Під час натискання на категорію виведіть у вигляді підсписку назви всіх товарів. Для цього зробіть запит на адресу 
 "https://pet-shop-backend-swd8.onrender.com/categories/:id"
 */
import { getCategories, getProductByCategories } from "../api/getGategories.js";
const categories = document.querySelector("#categories");
const pagination = document.querySelector("#pagination")


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
  console.log(typeof page);
  const btn = Array(totalPages).fill(0).map((_, index)=> {
    const className = index + 1 === page ? "pagination-btn active" : "pagination-btn";
    return `<button class="${className}" data-id="${index + 1}">${index + 1}</button>`
  }).join("")
  pagination.insertAdjacentHTML("beforeend", btn)
  pagination.insertAdjacentHTML("afterbegin", `<button ${page === 1 ? "disabled" : ""} class="pagination-arrow pagination-arrow-prev">prev</button>`)
  pagination.insertAdjacentHTML("beforeend", `<button ${page === totalPages ? "disabled" : ""} class="pagination-arrow pagination-arrow-next">next</button>`)
  return;
}
renderCategories();


pagination.addEventListener("click", function(event){
  if (!event.target.classList.contains("pagination-btn") && !event.target.classList.contains("pagination-arrow")) return
  if (event.target.classList.contains("pagination-arrow")){
    const value = event.target.classList.contains('pagination-arrow-prev') ? -1 : 1;
    page += value;
  categories.innerHTML = "";
  pagination.innerHTML = "";
  return renderCategories();
            
  }  
  const {id} = event.target.dataset
  page = Number(id)
  categories.innerHTML = "";
  pagination.innerHTML = "";
  renderCategories()
})

// loadMoreBtn.addEventListener("click", renderCategories)

categories.addEventListener("click", function (event) {
  if (!event.target.classList.contains("listItem")) return;
  const { id } = event.target.dataset;
  getProductByCategories(id).then(({ data: body, error }) => {
    const detailsBlock = event.target.querySelectorAll(".product-list");
    if (detailsBlock.length) {
      detailsBlock.forEach((el) => el.remove());
      return
    }
    const productList = body.data.products.map((el) => `<p class="product-list">${el.title}</p>`).join("");
    event.target.insertAdjacentHTML("beforeend", productList);
  });
});




