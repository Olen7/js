export async function searchProducts(search) {

    try{
        const response = await axios.get(
            `https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products?search=${search}`
          );
          const body = response.data;
          return {data: body}
    }
    catch(error){
        
        return {error}
    }
  
}
