const authInstance = axios.create({
  baseURL: "https://eshop-a0nb.onrender.com/api/auth/",
});
export async function registerUser(payload) {
  try {
    const { data } = await authInstance.post("/register", payload);

    return { data };
  } catch (error) {
    return { error };
  }
}
export async function loginUser(payload) {
  try {
    const { data } = await authInstance.post("/login", payload);
    return { data };
  } catch (error) {
    return {error}
  }
}
