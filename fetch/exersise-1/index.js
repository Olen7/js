/*
Зробіть запит на адресу https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products
і виведіть картки з товарами на экран. В картці повині бути назва товару, короткий опис
та ціна. Не забудьте про обробку помилки.
*/
const items = document.querySelector('#items')
items.insertAdjacentHTML('afterend', `<p id="posts-loading">Loading posts....</p>`)
fetch("https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products")
    .then(response =>{
        if(!response.ok){
            const error = new Error("Не забув!")
            error.status = response.status;
            throw error
        }
        return response.json()
    })
    .then(body =>{
        console.log(body);
       
      const elements = body.map(el => `<li><p>${el.name}</p><p class="short-description">${el.description}</p><p>${el.price}</p></li>`).join("") // доопрацювати el.description
      items.insertAdjacentHTML('beforeend', elements)
    })
    .catch(error =>{
        console.log(error.message, error.status);
    })
    .finally(()=>{
        const postsLoading = document.querySelector("#posts-loading")
        postsLoading?.remove()
    })