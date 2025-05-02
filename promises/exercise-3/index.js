/*
Напишіть проміс, який виконується з помилкою з текстом "Books not found" через 2 секунди
та виводить в ul з id="book-list" текст помилки.
*/
const bookList = document.querySelector('#book-list')
const promise = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(new Error("Books not found"))
        },5000)
})

promise
        .then(el=>console.log(el))
        .catch(error => bookList.insertAdjacentHTML('beforeend', `<li style="color: red; list-style-type: none;">${error.message}</li>`))

