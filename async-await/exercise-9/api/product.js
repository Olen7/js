const baseURL = "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products";
export async function getProduct() {
  try {
    const response = await fetch(baseURL);
    if (!response.ok) {
      const newError = new Error(response.statusText);
      newError.status = response.status;
      throw newError;
    }
    const body = await response.json();
    return { data: body };
  } catch (error) {
    return { error };
  }
}
