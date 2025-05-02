/*
Напишіть код додавання, видалення та зберігання списку користувачів
між перезавантаження сторінки. 
1. Коли користувач вписує username у формі з id="form-add-user", від додається
у список з id="user-list" у такому вигляді:
<li>User name <delete>Delete user</delete></li>
2. При настискані на кнопку "Delete user" користувач має видалятися зі списку.
3. При перезавантажені сторінки вже додані користувачі мають відмальовуватися у списку.
*/
import serializeForm  from "./serializeForm.js"
import safeParseFromLocalStorage  from "./safeParseFromLocalStorage.js"
const formAddUser = document.querySelector("#form-add-user")
const userList = document.querySelector("#user-list")
const arrUsers = safeParseFromLocalStorage("users", []);

function createUserItem(name, index){
    return `<li>${name} <button class ='delete-user' data-index = ${index}>Delete user</button></li>`
}
userList.insertAdjacentHTML('beforeend' ,arrUsers.map((name, index) => createUserItem(name, index)).join(""))
formAddUser.addEventListener("submit", function(event){
    event.preventDefault()
    const {"user-name": userName} = serializeForm(event.target)
    userList.insertAdjacentHTML('beforeend', createUserItem(userName, arrUsers.length))
    event.target.reset()
    
    arrUsers.push(userName)
    localStorage.setItem("users", JSON.stringify(arrUsers))

})
userList.addEventListener("click", function(event){
     if (event.target.classList.contains('delete-user')) {
        const {index} = event.target.dataset
        console.log(index);
        arrUsers.splice(Number(index), 1)
        
        event.target.closest('li').remove()
        localStorage.setItem("users", JSON.stringify(arrUsers))
        //console.log(event.target.parentElement.remove());
     }
})

