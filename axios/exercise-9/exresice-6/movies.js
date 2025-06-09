import { getMovieTypes, addMovie, deleteMovieById } from "./api/movieApi.js";
import serializeForm from "./serializeForm.js";
import { renderMovieList, renderMovieItem } from "./renderMovieList.js";
import { showMessageModal, showConfirmModal } from "./showMessage.js";
import { showLoader, hideLoader } from "./loader.js";

const movieForm = document.querySelector("#movieForm");
const myMovies = document.querySelector(".my-movies");
const typeSelect = document.querySelector("#type-select");
const moviesList = document.querySelector("#movies-list");
export function toggleMovies() {
  myMovies.classList.toggle("hidden");
  myMovies.classList.toggle("active");
}
export async function displayMovies() {
  toggleMovies();
  renderMovieList();
  showLoader(moviesList);

  const { data, error } = await getMovieTypes();

  if (error) {
    return movieForm.insertAdjacentHTML(
      "afterbegin",
      `<p class="error">${error.response.data.message}</p>`
    );
  }
  hideLoader();
  if (data.types.length < 1) {
    const formGroupType = movieForm.querySelector(".type");
    formGroupType.classList.add("hidden");
  }
  const listTypes = data.types
    ?.map((el) => `<option value="${el}">${el}</option>`)
    .join("");
  typeSelect.insertAdjacentHTML("beforeend", listTypes);
  movieForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const dataForm = serializeForm(event.target);
    console.log(dataForm);
    const { data: addData, error: addError } = await addMovie(dataForm);
    if (addError) {
      return myMovies.insertAdjacentHTML(
        "afterend",
        `<p class="error">${addError.response.data.message}</p>`
      );
    }
    showMessageModal("✅ Фільм успішно додано!", "success");
    const listItem = renderMovieItem(addData);
    moviesList.insertAdjacentHTML("beforeend", listItem);
    movieForm.reset();
  });

  moviesList.addEventListener("click", async function (event) {
    if (event.target.matches(".delete-btn")) {
      const confirmed = await showConfirmModal(
        "Ви дійсно хочете видалити цей фільм?"
      );
      if (!confirmed) return;

      const movieItem = event.target.closest(".my-movies-item");
      const id = movieItem?.dataset.id;
      const { data, error } = await deleteMovieById(id);
      if (error) {
        return moviesList.insertAdjacentHTML(
          "afterend",
          `<p class="error">${error.response.data.message}</p>`
        );
      }
      showMessageModal("✅ Фільм успішно видалено!", "success");
      movieItem?.remove();
    }
  });
}
