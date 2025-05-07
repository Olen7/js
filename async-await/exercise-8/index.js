import { getProduct } from "./api/product.js";
import { createProductItem } from "./createProducts.js";
import serializeForm from "./serializeForm/serialazeForm.js";
import { editProduct } from "./api/productEdit.js";
import { showAlert } from "./showAlert.js";

const list = document.querySelector("#list");
const filterProduct = document.querySelector("#filter-product");

// 🔧 ВИПРАВЛЕНО: Рендеримо модалку одразу, один раз
const modal = document.querySelector("#modal");
modal.insertAdjacentHTML(
  "beforeend",
  `
  <div class="modal-overlay" style="display:none;">
    <div class="modal">
      <h2>Edit Item</h2>
      <form action="#" id="modal-edit">
        <input type="text" placeholder="Title" name="name" class="modal-input" />
        <textarea placeholder="Description" name="description" class="modal-textarea"></textarea>
        <button type="submit" class="modal-save">Save</button>
      </form>
      <button class="modal-close">Cancel</button>
    </div>
  </div>
`
);
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".modal-close");
const modalEdit = document.querySelector("#modal-edit");

let currentEditId = null; // 🔧 ВИПРАВЛЕНО: тримаємо id поста, який редагуємо

// 🔧 ВИПРАВЛЕНО: обробник Submit додається один раз
modalEdit.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = serializeForm(event.target);
  if (!data.name || !data.description) return;

  if (!currentEditId) return;

  editProduct(currentEditId, data).then((result) => {
    if (result.error) {
      showAlert("Щось пішло не так 😢", true);
      return;
    }
    showAlert("Успішно змінено ✅");
    modalOverlay.style.display = "none";
    const item = list.querySelector(`.item[data-id="${currentEditId}"]`);
    if (item) {
      item.querySelector(".name").textContent = data.name;
      item.querySelector(".description").textContent = data.description;
    }
    currentEditId = null; // 🔧 тимчасово залишаємо повний перерендер
    getProduct().then(({ data }) => {
      const items = data.map(createProductItem).join("");
      list.insertAdjacentHTML("beforeend", items);
      attachEditListeners(); // 🔧 після оновлення заново підв'язуємо кнопки
    });
  });
});

modalClose.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  modalEdit.name.value = ""; // очищення
  modalEdit.description.value = ""; // очищення
  currentEditId = null;
});

// Основна функція
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
  attachEditListeners(); 
});


function attachEditListeners() {
  const items = document.querySelectorAll(".item .edit");
  items.forEach((el) => {
    el.addEventListener("click", function () {
      const parent = el.closest(".item");
      const id = parent.dataset.id;
      const name = parent.querySelector(".name").textContent;
      const description = parent.querySelector(".description").textContent;

      modalEdit.name.value = name; 
      modalEdit.description.value = description;
      currentEditId = id;
      modalOverlay.style.display = "flex";
    });
  });
}

filterProduct.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = serializeForm(event.target);
  list.querySelectorAll(".item").forEach((el) => {
    const minPrice = parseFloat(data.minPrice) || 0;
    const maxPrice = parseFloat(data.maxPrice) || Infinity;
    const selectedCategory = data.category;
    const { price, categoric } = el.dataset;
    const priceValue = parseFloat(price);
    const matchPrice = priceValue >= minPrice && priceValue <= maxPrice;
    const matchCategory = !selectedCategory || selectedCategory === categoric;

    if (matchPrice && matchCategory) {
      el.classList.remove("non-active");
    } else {
      el.classList.add("non-active");
    }
  });

  const visibleItems = [...list.querySelectorAll(".item")].filter(
    (el) => !el.classList.contains("non-active")
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
