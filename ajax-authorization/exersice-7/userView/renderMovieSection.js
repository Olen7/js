import {
  fetchMoviesList,
  addMovie,
  getGenresMovie,
  deleteMovie,
  getMovie,
  updateMovie,
} from "../api/movieApi.js";
import { createListItem } from "./createListItem.js";
import { fillFormFromLi } from "./fillFormFromLi.js";
import { handleApiError } from "./handleApiError.js";
import serializeForm from "../serializeForm.js";
const moviesList = document.getElementById("movies-list");
const addMovieForm = document.querySelector("#add-movie-form");
const userEmail = document.querySelector(".user-email");
const emailLocalStorage = localStorage.getItem("email");
const genre = document.querySelector("#genre");
const form = document.getElementById("edit-movie-form");

//поля форми
const genreModal = form.querySelector("#genre-modal");
const modal = document.querySelector("#modal");

const findByIdForm = document.querySelector("#find-by-id-form");
const moviesListById = document.querySelector("#movies-list-by-id");
export async function renderMovieSection() {
  if (emailLocalStorage) {
    userEmail.textContent = emailLocalStorage;
  }
  const genres = await getGenresMovie();
  handleApiError(genres.error);
  const option = genres.data
    ?.map((el) => `<option value="${el}">${el}</option>`)
    .join("");
  genre.insertAdjacentHTML("beforeend", option);

  const { data, error } = await fetchMoviesList();
  handleApiError(error);
  const renderList = data.map((el) => createListItem(el)).join("");
  moviesList.insertAdjacentHTML("beforeend", renderList);
  findByIdForm.classList.remove("hidden");
  findByIdForm["title"] = data[0]._id;
}

addMovieForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const dataForm = serializeForm(event.target);
  const { data, error } = await addMovie(dataForm);
  handleApiError(error);
  moviesList.insertAdjacentHTML("beforeend", createListItem(data));
});

/*створити функцію яка буде створувати розмітку <li></li>*/
moviesList.addEventListener("click", async function (event) {
  if (
    !event.target.classList.contains("delete-list") &&
    !event.target.classList.contains("edit-list")
  )
    return;
  const { id } = event.target.dataset;

  if (event.target.classList.contains("delete-list")) {
    const { data, error } = await deleteMovie(id);
    handleApiError(error);
    return event.target.parentElement.remove();
  }
  if (event.target.classList.contains("edit-list")) {
    if (genreModal.length < 1) {
      const genres = await getGenresMovie();
      const option = genres.data
        ?.map((el) => `<option class="option" value="${el}">${el}</option>`)
        .join("");
      genreModal.insertAdjacentHTML("beforeend", option);
    }
    const { id } = event.target.dataset;
    form.dataset.id = id;
    const li = event.target.closest("li");
    fillFormFromLi(event, form);
  }
});

modal.addEventListener("submit", async function (event) {
  event.preventDefault();
  const { id } = event.target.dataset;
  const payload = serializeForm(event.target);
  payload.id = id;
  const { data, error } = await updateMovie(payload);
  handleApiError(error);
  const li = moviesList.querySelector(`button[data-id="${id}"]`).parentElement;

  li.querySelector(".title").textContent = data.title;
  li.querySelector(".director").textContent = data.director;
  li.querySelector(".genre").textContent = data.genre;
  li.querySelector(".release-year").textContent = data.releaseYear;
  li.style.fontWeight = data.favorite ? "bold" : "normal";
  setTimeout(() => {
    modal.hidePopover();
  }, 1000);
});
findByIdForm.addEventListener("submit", async function (event) {
  event.preventDefault();
  const payload = serializeForm(event.target);
  console.log(payload);
  const { data, error } = await getMovie(payload.findById);
  handleApiError(error);
  event.target.reset();
  const renderList = `<li style="font-weight: ${
    data.favorite ? "bold" : "normal"
  }">
    <p class="title">${data.title}</p>
    <p class="director">${data.director}</p>
    <p class="genre">${data.genre}</p>
    <p class="release-year">${data.releaseYear}</p>
  </li>`;
  moviesListById.insertAdjacentHTML("beforeend", renderList);
  console.log(data);
});
/**/
