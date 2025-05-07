import { formatDateVariants } from "../formatDateVariants.js";
import { getRandomCategory } from "../getRandomCategory.js";

export const createProductItem = (el) => {
  const category = getRandomCategory(); // один раз генерується на елемент
  return `
    <li class="item" id="item" data-price="${el.price}" data-id="${el.id}" data-categoric="${
    category.categoriesData
  }">
      <p class="date">${formatDateVariants(el.createdAt).ukLong}</p>
      <p class="name" data-name="${el.name}">${el.name}</p>
      <p class="category-item">${category.categoriesText}</p>
      <p class="price">${el.price}</p>
      <p class="description">${el.description}</p>
      <img src="${el.image}" class="img" alt="Item image" />
      <button type="button" class="edit">EDIT</button>
    </li>
  `;
};
