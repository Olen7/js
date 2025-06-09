

const baseURL = "https://jsonplaceholder.typicode.com/users";
export async function getUser() {
    try {
        const response = await axios.get(baseURL)
        const body = response.data
        return {data: body}
    } catch (error) {
        return {error}
    }
}