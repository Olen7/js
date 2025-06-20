import instance from "./auth.js";
export async function getMovieTypes() {
  try {
    const { data } = await instance.get("/movies/types/all");

    return { data };
  } catch (error) {
    return { error };
  }
}
export async function addMovie(movieData) {
  try {
    const { data } = await instance.post("/movies", movieData);

    return { data };
  } catch (error) {
    return { error };
  }
}
export async function getMovieList() {
  try {
    const { data } = await instance.get("/movies");
    return { data };
  } catch (error) {
    return { error };
  }
}
export async function deleteMovieById(id) {
  try {
    const { data } = await instance.delete(`/movies/${id}`);
    return { data };
  } catch (error) {
    return { error };
  }
}
