const quoteInstance = axios.create({baseURL: "https://zenquotes-proxy.onrender.com/api/random"})
export async function getRandomQuote() {
  try {
    const {data} = await quoteInstance.get("/");
    return { data };
  } catch (error) {
    return { error };
  }
}