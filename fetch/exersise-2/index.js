/*
Додай у перше завдання таку логіку - при натисканні на назву товару під ним
виводиться детальна інформація про товар. Для цього при натискані робіть запит на 
адресу "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products/:id", де 
:id - це id товару.
*/
const items = document.querySelector('#items');
items.addEventListener("click", showProductDetails);
    function showProductDetails (event){
        if(event.target.classList.contains("js-name")){
            //console.log(event.target.nextElementSibling);
            if (event.target.nextElementSibling.classList.contains("js-description")) {
                return event.target.nextElementSibling.remove()
            }
           const {id} = event.target.dataset
        fetch(`https://67e3b7b52ae442db76d13e6a.mockapi.io/api/products/${id}`)
        .then(response =>{
           if(!response.ok){
               const error = new Error("Не забуваємо про помилку!");
               error.status = response.status;
               throw error
           }
           return response.json()
        })
        .then(body =>{
            event.target.insertAdjacentHTML("afterend", `<p class="js-description">${body.description}</p>`)
        })
        .catch(error =>{
             console.log(error.message, error.status);
        })

        }
    };
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
       
      const elements = body.map(el => `<li><p class="js-name" data-id=${el.id}>${el.name}</p><p>${el.price}</p></li>`).join("") // доопрацювати el.description
      items.insertAdjacentHTML('beforeend', elements)
    })
    .catch(error =>{
        console.log(error.message, error.status);
    })
    .finally(()=>{
        const postsLoading = document.querySelector("#posts-loading")
        postsLoading?.remove()
    })