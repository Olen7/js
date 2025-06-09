/*
Переробіть 1 задачу із теми fetch на async/await.
*/
async function fetchProducts(){
    const items = document.querySelector('#items')
     try{
        items.insertAdjacentHTML('afterend', `<p id="posts-loading">Loading posts....</p>`)
        const response = await fetch("https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products");
        if(!response.ok){
            const error = new Error("Не забув!")
            error.status = response.status;
            throw error
        }
       const body = await response.json()
       const elements = body.map(el => `<li><p>${el.name}</p><p class="short-description">${el.description}</p><p>${el.price}</p></li>`).join("") // доопрацювати el.description
       items.insertAdjacentHTML('beforeend', elements)
     }
     catch(error){
        console.log(error.message, error.status);
     }
     finally{
        const postsLoading = document.querySelector("#posts-loading")
        postsLoading?.remove()
     }
}

fetchProducts()