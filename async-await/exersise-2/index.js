/*
Переробіть 2 задачу із теми fetch на async/await.
*/
const items = document.querySelector("#items");
items.addEventListener("click", showProductDetails);

async function fetchProducts() {
  items.insertAdjacentHTML(
    "afterend",
    `<p id="posts-loading">Loading posts....</p>`
  );
  try {
    const response = await fetch(
      "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products"
    );
    if (!response.ok) {
      const error = new Error("Не забув!");
      error.status = response.status;
      throw error;
    }
    const body = await response.json();
    const elements = body
      .map(
        (el) =>
          `<li><p class="js-name" data-id=${el.id}>${el.name}</p><p>${el.price}</p></li>`
      )
      .join(""); // доопрацювати el.description
    items.insertAdjacentHTML("beforeend", elements);
  } catch (error) {
    console.log(error.message, error.status);
  } finally {
    const postsLoading = document.querySelector("#posts-loading");
    postsLoading?.remove();
  }
}
fetchProducts();

async function showProductDetails(event) {
  // return "5"
  if (event.target.classList.contains("js-name")) {
    //console.log(event.target.nextElementSibling);
    if (event.target.nextElementSibling.classList.contains("js-description")) {
      return event.target.nextElementSibling.remove();
    }
    const { id } = event.target.dataset;
    try {
      const response = await fetch(
        `https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products/${id}`
      );
      if (!response.ok) {
        const error = new Error("Не забуваємо про помилку!");
        error.status = response.status;
        throw error;
      }
      const body = await response.json();
      event.target.insertAdjacentHTML(
        "afterend",
        `<p class="js-description">${body.description}</p>`
      );
    } catch (error) {
      console.log(error.message, error.status);
    }
  }
}
