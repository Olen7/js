const baseURL = "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products";

export async function editProduct(id, payload) {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;
    }

    const body = await response.json();
    console.log(body);
    return { data: body };
  } catch (error) {
    return { error };
  }
}

