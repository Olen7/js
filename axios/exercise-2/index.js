/*
Переробіть 2 задачу із теми async/await на axios.
*/
const items = document.querySelector("#items");
items.addEventListener("click", showProductDetails);

async function fetchProducts() {
  items.insertAdjacentHTML(
    "afterend",
    `<p id="posts-loading">Loading posts....</p>`
  );
  try {
    const response = await axios.get(
      "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products"
    );
    console.log(response);
    const body =  response.data;

    const elements = body
      .map(
        (el) =>
          `<li><p class="js-name" data-id=${el.id}>${el.name}</p><p>${el.price}</p></li>`
      )
      .join(""); // доопрацювати el.description
    items.insertAdjacentHTML("beforeend", elements);
  } catch (error) {
    const status = error.response?.status || "невідомо";
    console.log(status);
    console.error("Axios Error:", error.message, "Код:", status);
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
      const response = await axios.get(
        `https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products/${id}`
      );
      const body = response.data;
      event.target.insertAdjacentHTML(
        "afterend",
        `<p class="js-description">${body.description}</p>`
      );
    } catch (error) {
      const status = error.response?.status || "невідомо";
      console.log(status);
      console.error("Axios Error:", error.message, "Код:", status);
    }
  }
}
