const baseURL = "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/posts";
export async function getPosts() {
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

export async function deletePostById(id) {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
}
export async function addPost(payload) {
  try{
    const response = await fetch(
      baseURL,{
        method: "POST",
        body: JSON.stringify(payload),
        headers: {"Content-Type": "application/json",}
      }
    );
    if (!response.ok) {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;
    }
    const body = await response.json();
    console.log(body);
        return {data: body}
  }
  catch(error){
      return {error}
  }
}