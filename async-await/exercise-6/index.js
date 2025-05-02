/*
Напишіть код, який працює так:
1. При завантажені сторінки в ul з id="post-list" виводиться список постів
з кнопкою з текстм delete поряд з кожним постом. 
2. Коли користувач заповнює форму, робиться POST запит на адресу
https://67e3b7b52ae442db76d13e6a.mockapi.io/api/posts і якщо добре - повертається новий пост,
який треба додати в список.
3. При натискані на кнопку з текстом delete робиться DELETE-запит на адресу
https://67e3b7b52ae442db76d13e6a.mockapi.io/api/posts/:id для видаленя поста.
*/
import { getPosts, deletePostById,  addPost} from "./api/posts.js"
import serializeForm from "./serializeForm/serialazeForm.js"
import { createPostItem } from "./createPostItem.js"

const postList = document.querySelector("#post-list")
const postAddForm = document.querySelector("#post-add-form")
postList.insertAdjacentHTML("afterend", `<p id="loading-text">Loading posts....</p>`)
getPosts().then(({data, error}) =>{
    postList.nextElementSibling.remove()
     if (error?.status === 404) {
        postList.innerHTML = "";
        return postList.insertAdjacentHTML("afterend", `<p class="error">${error.status} ${error.statusText}</p>`)
        
     }
     const items = data.map(createPostItem).join('')
     postList.insertAdjacentHTML("beforeend", items)


})
postList.addEventListener("click", async function(event){
    if (event.target.classList.contains("delete-button")) { // .matches("button[data-id]")
        const { id } = event.target.dataset;
        const  {data, error} = await deletePostById(id)
        if (error) {
    
            return postList.insertAdjacentHTML("afterend", `<p class="error">${error.status} ${error.statusText}</p>`) 
        }  
    }
    event.target.closest(".item").remove()
})

postAddForm.addEventListener("submit", async function (event){
    event.preventDefault()
    const data = serializeForm(event.target)
    event.target.reset()
    console.log(data);
    const {data: newPost, error} = await addPost(data)  
    console.log(newPost);
    if (error) {
        return postList.insertAdjacentHTML("afterend", `<p class="error">${error.status} ${error.statusText}</p>`) 
    } 
    postList.insertAdjacentHTML("beforeend", createPostItem(newPost))
})

