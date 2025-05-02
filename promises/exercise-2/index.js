/*
Напишіть проміс, який успішно виконується через 2 секунди та повертає масив книг нижче. 
Після чого візьміть цей масив, зробіть із нього масив тегів li та виведіть у ul з id="book-list"
*/
const books = [
  {
    id: "u9kgwNWGi3uUUwh0b8V49",
    title: "Eloquent JavaScript, Third Edition",
    author: "Marijn Haverbeke",
  },
  {
    id: "YxhM4QDxPeA3SmPHcEZPJ",
    title: "Practical Modern JavaScript",
    author: "Nicolas Bevacqua",
  },
];
const bookArr = new Promise((resolve, reject) =>{
     setTimeout(()=>{
        return resolve(books)
     },2000)
    //  reject(new Error("Такого масива немає"))
})
bookArr
  .then(item => {
    const bookList = document.getElementById("book-list")
    item.map(el => bookList.insertAdjacentHTML("beforeend", `<li id="list-item">${el.author}</li>`))
  })
  .catch(error => console.log(error.message))