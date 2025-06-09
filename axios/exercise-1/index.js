async function fetchProducts() {
  const items = document.querySelector("#items");
  items.insertAdjacentHTML(
    "afterend",
    `<p id="posts-loading">Loading posts....</p>`
  );
  try {
    const response = await axios.get(
      "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products"
    );
    const body = await response.data;

    const elements = body
      .map(
        (el) =>
          `<li><p>${el.name}</p><p class="short-description">${el.description}</p><p>${el.price}</p></li>`
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
