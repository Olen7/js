export const authInstance = axios.create({
  baseURL: "https://auth-backend-wrij.onrender.com/api",
});

export async function registerUser(payload) {
  try {
    const { data } = await authInstance.post("/auth/signup", payload);
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function loginUser(payload) {
  try {
    const { data } = await authInstance.post("/auth/signin", payload);
    authInstance.defaults.headers["Authorization"] = `Bearer ${data.token}`;
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function logoutUser() {
  try {
    const { data } = await authInstance.post("/auth/signout");
    //  authInstance.defaults.headers["Authorization"] = ""

    ["common", "post", "get", "put", "delete", "patch"].forEach((method) => {
      delete authInstance.defaults.headers[method]?.Authorization;
    });
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    return { data };
  } catch (error) {
    return { error };
  }
}

export async function currentUser(token) {
  try {

   const { data } = await authInstance.get("/auth/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return { data };
  } catch (error) {
    return { error };
  }
}
