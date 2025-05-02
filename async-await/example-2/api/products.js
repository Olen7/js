const baseURL = "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products";

export const addProduct = async(payload)=> { // payload - зміна, що містить дані, що треба додати на бекенд
    try {
        const response = await fetch(baseURL, {
            method: "POST", // метод пишеться у верхньому регістрі
            body: JSON.stringify(payload), // body має бути строкою, у якому форматі - визначає бекенд. JSON - найпоширеніший варіант
        });
        if(!response.ok) {
            const error = new Error(response.statusText);
            error.status = response.status;
            throw error;
        }
        const data = await response.json();
        return {data};
    }
   catch(error) {
    return {error};
   }
}

export const deleteProductById = async id => {
    try {
        const response = await fetch(`${baseURL}/${id}`, {
            method: "DELETE", 
        });
        if(!response.ok) {
            const error = new Error(response.statusText);
            error.status = response.status;
            throw error;
        }
        const data = await response.json();
        return {data};
    }
   catch(error) {
    return {error};
   }
}