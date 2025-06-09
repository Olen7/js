export async function searchProducts(search) {

    try{
        const response = await fetch(
            `https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products?search=${search}`
          );
        if (!response.ok) {
            const error = new Error(response.statusText);
            error.status = response.status;
            throw error;
          }
          const body = await response.json();
          return {data: body}
    }
    catch(error){
        // console.log(error.message, error.status);
        return {error}
    }
  
}
