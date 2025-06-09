/*
Додайте у 2 завдання завантаження товарів по частинам. Для цього треба 
робити запит на адресу "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products?page=1&limit=10",
де замість 1 ви передаєте номер сторінки і замість 10 - кількість об'єктів на сторінці.
Код має працювати так: 
1. При завантажені сторінки завантажуються перші 10 товарів.
2. Після успішного завантаження під списком товарів зв'являється кнопка з текстом "Load more".
3. При натискані на цю кнопку робиться запит за тією ж адресою, але значення _page має бути на 1 більше.
Нові товари додаются в список після тих, що вже є.
*/
const items = document.querySelector("#items");
let page = 1;
async function fetchProducts() {
  items.insertAdjacentHTML(
    "afterend",
    `<p id="posts-loading">Loading posts....</p>`
  );
  try {
    const response = await axios.get(
      `https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products?page=${page}&limit=10`
    );

    page += 1;
    const body = response.data;
    const elements = body
      .map(
        (el) =>
          `<li><p class="js-name" data-id=${el.id}>${el.name}</p><p>${el.price}</p></li>`
      )
      .join(""); // доопрацювати el.description
    items.insertAdjacentHTML("beforeend", elements);
    if (!document.querySelector("#products-load-more")) {
      items.insertAdjacentHTML(
        "afterend",
        `<button id="products-load-more">Load more</button>`
      );

      const buttonLoadMore = document.querySelector("#products-load-more");
      buttonLoadMore.addEventListener("click", fetchProducts);
    }
  } catch (error) {
    const status = error.response?.status || "Невідомо";
    console.log(status);
    console.error("Axios Error:", error.message, "Код:", status);
  } finally {
    const postsLoading = document.querySelector("#posts-loading");
    postsLoading?.remove();
  }
}
fetchProducts();
