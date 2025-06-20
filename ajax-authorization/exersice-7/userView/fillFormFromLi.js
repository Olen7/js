export function fillFormFromLi(event, form) {
  const li = event.target.closest("li");
  if (!li) return;

  // Отримуємо елементи форми
  const titleInput = form.elements.title;
  const directorInput = form.elements.director;
  const releaseYearInput = form.elements.releaseYear;
  const favoriteInput = form.elements.favorite;
  const genreModal = form.querySelector("#genre-modal");

  // Отримуємо значення з елементів li
  const title = li.querySelector(".title")?.textContent || "";
  const director = li.querySelector(".director")?.textContent || "";
  const genre = li.querySelector(".genre")?.textContent || "";
  const releaseYear = li.querySelector(".release-year")?.textContent || "";
  const favorite =
    getComputedStyle(li).fontWeight === "bold" ||
    getComputedStyle(li).fontWeight === "700";

  // Заповнюємо форму
  titleInput.value = title;
  directorInput.value = director;
  releaseYearInput.value = releaseYear;
  favoriteInput.checked = favorite;
  genreModal.value = genre;
}
