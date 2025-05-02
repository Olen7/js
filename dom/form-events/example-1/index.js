import serializeForm from "./serializeForm.js";

const productListElement = document.querySelector("#product-list");
const formAddProduct = document.querySelector("#add-product-form");
// const productNameElement = document.querySelector("#add-product-form [name=name]");
// const productPriceElement = document.querySelector("#add-product-form [name=price]");

formAddProduct.addEventListener("submit", function(e) {
    e.preventDefault();
    const sendData = serializeForm(this);
    productListElement.insertAdjacentHTML("beforeend", `
        <li class="product-list-item">${sendData.name}: ${sendData.price}</li>
    `);
    this.reset();
})