// При завантаженні сторінки виводяться товари (використовуй API: https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products).

// Над списком є дві форми:

// Введення мінімальної і максимальної ціни.

// Вибір категорії (типу <select>).

// Після зміни будь-якого з параметрів виконується фільтрація (можна на клієнті або з
// параметрами ?price_gte=X&price_lte=Y&category=Z, якщо API дозволяє).

// Якщо фільтри не дають результату — вивести "нічого не знайдено".
import { getProduct } from "./api/product.js";
import { createProductItem } from "./createProducts.js";
import serializeForm from "./serializeForm/serialazeForm.js";
const list = document.querySelector("#list");
const filterProduct = document.querySelector("#filter-product");
getProduct().then(({ data, error }) => {
  if (error?.status === 404) {
    postList.innerHTML = "";
    return postList.insertAdjacentHTML(
      "afterend",
      `<p class="error">${error.status} ${error.statusText}</p>`
    );
  }
  const items = data.map(createProductItem).join("");
  list.insertAdjacentHTML("beforeend", items);
});
filterProduct.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = serializeForm(event.target);
  
  console.log(data);
  list.querySelectorAll(".item").forEach((el) => {
    const minPrice = parseFloat(data.minPrice) || 0;
    const maxPrice = parseFloat(data.maxPrice) || Infinity;
    const selectedCategory = data.category;
    const { price, categoric } = el.dataset;
    const priceValue = parseFloat(price);
    const matchPrice = priceValue >= minPrice && priceValue <= maxPrice;
    const matchCategory = !selectedCategory || selectedCategory === categoric;

    if (matchPrice && matchCategory) {
      el.classList.remove('non-active');
    } else {
      el.classList.add('non-active');
    }
    
  });
  const visibleItems = [...list.querySelectorAll(".item")].filter(
    el => !el.classList.contains("non-active")
  );
  
  const noResultsMessage = document.querySelector("#no-results");
  if (noResultsMessage) noResultsMessage.remove();
  
  if (visibleItems.length === 0) {
    list.insertAdjacentHTML(
      "afterend",
      `<p id="no-results">Нічого не знайдено</p>`
    );
  }
});
