import { getMovieList } from "./api/movieApi.js";
const moviesList = document.querySelector("#movies-list");
export async function renderMovieList() {
  const { data: movieListData, error: movieListError } = await getMovieList();

  if (movieListError) {
    return myMovies.insertAdjacentHTML(
      "afterend",
      `<p class="error">${movieListError.response.data.message}</p>`
    );
  }

  const listMovies = movieListData.data.items
    .map(
      (el) => `
      <li class="my-movies-item ${el.favorite ? 'bolt' : ''}" data-id="${el._id}">
        <p class="title">${el.title}</p>
        <p class="director">${el.director}</p>
        <p class="type">${el.type}</p>
        <p class="release-year">${el.releaseYear}</p>
        <button type="button" class="delete-btn">Delete</button>
      </li>`
    )
    .join("");
  
  moviesList.innerHTML = ""
  moviesList.insertAdjacentHTML("beforeend", listMovies);
}
export function renderMovieItem(movie) {
    console.log(movie.data);
  return `
    <li class="my-movies-item ${movie.data.favorite ? 'bolt' : ''}" data-id="${movie.data._id}">
        <p class="title">${movie.data.title}</p>
        <p class="director">${movie.data.director}</p>
        <p class="type">${movie.data.type}</p>
        <p class="release-year">${movie.data.releaseYear}</p>
        <button type="button" class="delete-btn">Delete</button>
      </li>`;
}