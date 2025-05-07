import { formatDateVariants } from './formatDateVariants.js';
import { getRandomCategory } from './getRandomCategory.js';

export const createProductItem = el => {
  const category = getRandomCategory(); // один раз генерується на елемент
  return `
    <li class="item" data-price="${el.price}" data-categoric="${category.categoriesData}">
      <p class="date">${formatDateVariants(el.createdAt).ukLong}</p>
      <p class="name">${el.name}</p>
      <p class="category-item">${category.categoriesText}</p>
      <p class="price">${el.price}</p>
      <p class="description">${el.description}</p>
      <img src="${el.image}" class="img" alt="Item image" />
    </li>
  `;
};
