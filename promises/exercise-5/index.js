/*
Напишіть 4 функції:
 1. createArrToUpperCase - ця функція перекладає всі слова в переданому їй як аргумент масиві в нижній регістр. 
    Якщо аргумент не масив, повертає помилку з текстом "Not Array".
 2. sortFromLongToShort - сортує переданий їй як аргумент масив рядків за принципом "найдовші слова - на самому початку".
 3. createNumList - Перетворює масив рядків на нумерований список, і повертає його у вигляді HTML-розмітки.
 4. showHTML - Отримує 2 аргументи:
 - HTML-розмітку;
 - посилання на DOM-елемент;
 Функція виводить у переданий їй DOM-елемент отриману в першому аргументі HTML-розмітку, не видаляючи його вміст.

 Напишіть для цього ланцюжок then, передаючи результат роботи кожної функції наступного then. 
 Як елемент, у який потрібно вивести список, використовуйте div з id="list"
*/
import pipeAsync from"./pipeAsync.js"
const arrWords = [
   "Ми не сіємо",
   "Незламні. Нескорені. Непокірні.",
   "Почуй мій рев",
   "Нам лють",
   "Зима близько!",
   "полум’я і кров!"
 ];

 function createArrToUpperCase(arr) {
   return new Promise((resolve, reject) => {
     if (!Array.isArray(arr)) {
       reject(new Error("Not Array"));
     } else {
       resolve(arr.map(el => el.toLowerCase()));
     }
   });
 }
function sortFromLongToShort(arr){
       return [...arr].sort((a, b) => b.length - a.length)
}
function createNumList(arr){
   if (arr?.length) {
         return arr?.map((el, idx)=> `<li>${idx + 1} ${el}</li>`)
      }
}
function showHTML(domArrList, domElement){
    return domArrList.map(el => domElement.insertAdjacentHTML("beforeend", el))
}
const list = document.querySelector('#list')
pipeAsync(createArrToUpperCase, sortFromLongToShort, createNumList, htmlList => showHTML(htmlList, list))(arrWords).catch(err => console.log(err.message));


// createArrToUpperCase(arrWords)
//          .then(item => sortFromLongToShort(item))
//          .then(item => createNumList(item))
//          .then(item => showHTML(item, list))
//          .catch(error => console.log(error.message))



