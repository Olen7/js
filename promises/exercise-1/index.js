/*
Створіть 2 проміси:
 - перший через 2 секунди успішно завершується, записуючи в result масив книг нижче;
 - другий за 1 секунду завершується з помилкою з текстом "Not found";
*/
const books = [
    {
        "id": "u9kgwNWGi3uUUwh0b8V49",
        "title": "Eloquent JavaScript, Third Edition",
        "author": "Marijn Haverbeke"
    },
    {
        "id": "YxhM4QDxPeA3SmPHcEZPJ",
        "title": "Practical Modern JavaScript",
        "author": "Nicolas Bevacqua"
    },
];
const bookCreat = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(books)
    },2000)
})
bookCreat
    .then(result => console.log(result))
    .catch(error => console.log(error.message));

const bookMessage = new Promise((resolve, reject) => {
     setTimeout(()=>{
        reject(new Error("Not found"))
     },1000)
})
bookMessage
    .then(el => console.log(el))
    .catch(error => console.log(error.message));