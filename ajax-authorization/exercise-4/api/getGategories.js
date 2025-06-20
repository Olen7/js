const quoteInstance = axios.create({
  baseURL: "https://pet-shop-backend-swd8.onrender.com/categories/",
});
export async function getCategories({limit = 3, page = 1}) {
  console.log(limit);
  try {
    const { data } = await quoteInstance.get(`/all?limit=${limit}&page=${page}`);
    return { data };
  } catch (error) {
    return { error };
  }
}
export async function getProductByCategories(id) {
  try {
    const { data } = await quoteInstance.get(`/${id}`);
    return { data };
  } catch (error) {
    return { error };
  }
}
