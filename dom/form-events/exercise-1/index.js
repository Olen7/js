/*
Напишіть код, який працює так:
людина пише назву продукту и кількість, і при відправці
форми ця інформація з'являється в ul з id="product-list".
Якщо якесь поле не заповнене, виводьте під ним червоним кольором
текст помилки "це поле обов'язкове для заповнення"
*/

import serializeForm from "./serializeForm.js";
const formProductEl = document.querySelector("#form-product");
const productListEl = document.querySelector("#product-list");
formProductEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const errorEl = event.target.querySelectorAll(".error");
  errorEl.forEach(el => {
    console.log(el);
    el.remove()
  });
  const { product, qty } = serializeForm(event.target);

  if (!product) {
    const nameProductEl = event.target.querySelector("[name=product]");
    nameProductEl.insertAdjacentHTML(
      "afterend",
      `<p class="error">це поле обов'язкове для заповнення</p>`
    );
  }
  if (!qty) {
    const nameQtyEl = event.target.querySelector("[name=qty]");
    nameQtyEl.insertAdjacentHTML(
      "afterend",
      `<p class="error">це поле обов'язкове для заповнення</p>`
    );
  }
  if (!product || !qty) return;
  productListEl.insertAdjacentHTML(
    "beforeend",
    `<li class="product-item">${product}: ${qty}</li>`
  );
});
