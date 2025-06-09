import serializeForm from "./serialazeForm.js";
import { searchProducts } from "./api/productsSearch.js";
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
    .map((el) => {
      console.log(el);
      return `<li><img src="${el.image}" class="img" alt="Item image"/><p class="name">${el.name}</p><p class="price">${el.price}</p><p class="description">${el.description}</p></li>`
    })
    .join("");
  productList.insertAdjacentHTML("beforeend", elements);
});

