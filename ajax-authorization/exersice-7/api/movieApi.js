import { authInstance as moviesInstance } from "./auth.js"
async function withTryCatch(fn){
    try{
      const {data } = await fn()
       return {data}
    }catch(error){
      return { error }
    }
}
export async function fetchMoviesList() {
    return withTryCatch(()=>  moviesInstance.get("/movies"))
}
export async function addMovie(payload) {
    return withTryCatch(()=>   moviesInstance.post("/movies", payload))
}
export async function getGenresMovie(payload) {
    return withTryCatch(()=> moviesInstance.get("/genres", payload))
}
export async function deleteMovie(id) {
    return withTryCatch(()=> moviesInstance.delete(`/movies/${id}`))
}
export async function getMovie(id) {
    return withTryCatch(()=> moviesInstance.get(`/movies/${id}`))
}
export async function updateMovie({id, ...payload}) {
    return withTryCatch(()=> moviesInstance.put(`/movies/${id}`, payload))
}
