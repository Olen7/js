/*
<<<<<<< HEAD
Напишіть код, який читає дані з форми та додає статью (назву і тип) у 
список з id="article-list". Всі поля обов'язкові.
*/
import serializeForm from "./serializeForm.js"
import checkRequiredFields from "./checkRequiredFields.js"
const formAddArticle = document.querySelector("#form-add-article")
const articleList = document.querySelector("#article-list")
formAddArticle.addEventListener("submit", event =>{
    event.preventDefault();
    const errorElements = event.target.querySelectorAll(".error");
    errorElements.forEach((el) => el.remove());
    
    const isEmptyRequiredField = checkRequiredFields(event.target, [
        "title",
        "description",
        "type",
      ]);
    if (isEmptyRequiredField) return
    const data = serializeForm(event.target);
    articleList.insertAdjacentHTML("beforeend", `<p class="">${data.title} ${data.type}</p>`);
    console.log(data);

})
console.log(formAddArticle);
=======
Напишите код, который читает данные из формы и добавляет в список с id="article-list" новую статью. Все поля формы обязательны.

*/
>>>>>>> 1d44ac2e9f4b723af5e77b79f26ce88f85bfdfcf
