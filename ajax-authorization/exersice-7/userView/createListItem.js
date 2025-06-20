export function createListItem(el) {
  return `<li style="font-weight: ${el.favorite ? "bold" : "normal"}">
    <p class="title">${el.title}</p>
    <p class="director">${el.director}</p>
    <p class="genre">${el.genre}</p>
    <p class="release-year">${el.releaseYear}</p>
    <button data-id="${el._id}" class="delete-list">Delete</button>
    <button data-id="${
      el._id
    }" popovertarget="modal" class="edit-list">⚙️</button>
  </li>`;
}
