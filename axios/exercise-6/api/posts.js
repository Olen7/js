const baseURL = "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/posts";
export async function getPosts() {
  try {
    const response = await axios.get(baseURL);
    
    const body = response.data;
    return { data: body };
  } catch (error) {
    return { error };
  }
}

export async function deletePostById(id) {
  try {
    const response = await axios.delete(`${baseURL}/${id}`, {
      method: "DELETE",
    });
    const data = response.data;
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function addPost(payload) {
  console.log(payload);
  try{
    const response = await axios.post(baseURL, payload);
    console.log(response);
    
    const body = response.data;
        return {data: body}
  }
  catch(error){
      return {error}
  }
}