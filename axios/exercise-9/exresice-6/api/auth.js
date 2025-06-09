const authInstance = axios.create({
  baseURL: "https://eshop-a0nb.onrender.com/api/",
});
export async function registerUser(payload) {
  try {
    const { data } = await authInstance.post("/auth/register", payload);

    return { data };
  } catch (error) {
    return { error };
  }
}
export async function loginUser(payload) {
  try {
    const { data } = await authInstance.post("/auth/login", payload);
    authInstance.defaults.headers["Authorization"] = `Bearer ${data.data.token}`
    return { data };
  } catch (error) {
    return {error}
  }
}

export async function logoutUser() {
  try {
    const { data } = await authInstance.post("/auth/logout");

    delete authInstance.defaults.headers.common['Authorization'];
    delete authInstance.defaults.headers.get['Authorization'];
    delete authInstance.defaults.headers.post['Authorization'];
    delete authInstance.defaults.headers.put['Authorization'];
    delete authInstance.defaults.headers.patch['Authorization'];
    delete authInstance.defaults.headers.delete['Authorization'];

    return { data };
  } catch (error) {
    return {error}
  }
}

export async function currentUser(token) {
  try {
    const { data } = await authInstance.get("/auth/current");
    authInstance.defaults.headers["Authorization"] = `Bearer ${token}`
    return { data };
  } catch (error) {
    return {error}
  }
}

export default authInstance