/*
 1. Під час завантаження сторінки зроби запит на адресу "https://pet-shop-backend-swd8.onrender.com/categories/all" и виведіть
 назви усіх категорій у списку.
 2. Під час натискання на категорію виведіть у вигляді підсписку назви всіх товарів. Для цього зробіть запит на адресу 
 "https://pet-shop-backend-swd8.onrender.com/categories/:id"
 */
import { getCategories, getProductByCategories } from "../api/getGategories.js";
const categories = document.querySelector("#categories");
getCategories().then(({ data: body, error }) => {
  const list = body.data
    .map((el) => `<li class="listItem" data-id="${el.id}">${el.title}</li>`)
    .join("");
  categories.innerHTML = list;
});

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
