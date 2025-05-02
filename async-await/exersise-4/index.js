/*
Напишіть код пошуку товарів. Як він має працювати:
1. Користувач пише що хоче знайти у формі з id="products-search-form".
2. Код відправляє запит на адресу: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products?search".
3. Якщо щось знайдено (масив у відповіді не пустий), то виводьте список товарів в ul з id="products".
4. Якщо нічого не знайдено (масив у відповіді пустий), под під пустим списком виводьте текст "нічого не знайдено".
5. Помилку та loading також виводьте.
*/
import serializeForm from "./serialazeForm.js";
import { searchProducts } from "./api/products.js";
const productsSearchForm = document.querySelector("#products-search-form");
const productList = document.querySelector("#products");

productsSearchForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const data = serializeForm(event.target);
  productList.innerHTML = ""; // робимо пустий ul
  if (productList.nextElementSibling.classList.contains("error")) {
    productList.nextElementSibling.remove()
  }
  productList.insertAdjacentHTML(
    "afterend",
    `<p id="posts-loading">Loading posts....</p>`
  );
  event.target.reset();

  const { data: products, error } = await searchProducts(data.search);
  productList.nextElementSibling.remove();
  if (error) {
    return productList.insertAdjacentHTML(
      "afterend",
      `<p class="error">${error.message}</p>`
    );
  }
  const elements = products
    .map((el) => `<li> ${el.name}. ${el.price}</li>`)
    .join("");
  productList.insertAdjacentHTML("beforeend", elements);
});


