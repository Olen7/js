const quoteInstance = axios.create({
  baseURL: "https://pet-shop-backend-swd8.onrender.com/categories/",
});
export async function getCategories() {
  try {
    const { data } = await quoteInstance.get(`/all`);
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
