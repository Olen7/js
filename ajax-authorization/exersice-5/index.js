//як що в локал сторедж немає токену показуємо форму регістраії з перемиканням на логін як що людина успішно зарегистрквалась показуємо форму логіну 
// токен який ми оримуємо після успішного логіну зберігаємо в локалСторедж всі помилки відображаємо

//1 Перевірити localStoreg чи є там token
//2 як що немає то показую форму регістрації а як що є то логіну в кожній з них має бути кнопка для переключання один на одного
//https://eshop-a0nb.onrender.com/api/auth/register, об'єкт: 
// {
// email: "bogdan@gmail.com",
// password: "123456"
// }
// https://eshop-a0nb.onrender.com/api/auth/login, об'єкт: 
// {
// email: "bogdan@gmail.com",
// password: "123456"
// }
//3 після успішної регістрації показуємо форму логіна 
//4 token записуємо в localStoreg
//5 Обробляємо всі помилки
import {registerUser, loginUser} from './api/auth.js'
import serializeForm from './serializeForm.js'
function toggleAuth(){
     register.classList.toggle("hidden")
     login.classList.toggle("hidden")

}
const register = document.querySelector('#register')
const login = document.querySelector('#login')
const token = localStorage.getItem('token')
const toRegister = document.querySelector('#to-register')
const toLogin = document.querySelector('#to-login')
if(!token){
   register.classList.remove("hidden")
}else{
    login.classList.remove("hidden")
}
toRegister.addEventListener("click", toggleAuth)
toLogin.addEventListener("click", toggleAuth)
register.addEventListener("submit", async function(event){
    event.preventDefault()
    event.target.nextElementSibling.classList.contains("error").remove()
    const payload = serializeForm(event.target);
   const {data , error} =  await registerUser(payload)
   if (error) {
      return event.target.insertAdjacentHTML("afterend", `<p class="error">${error.response.data.message}</p>`)
   }
   toggleAuth()
})
login.addEventListener("submit", async function(event){
    event.preventDefault()
   if(event.target.nextElementSibling?.classList.contains("error")) {
    event.target.nextElementSibling.remove()
   }
    const payload = serializeForm(event.target);
   const {data , error} =  await loginUser(payload)
   if (error) {
      return event.target.insertAdjacentHTML("afterend", `<p class="error">${error.response.data.message}</p>`)
   }
   localStorage.setItem("token", data.data.token)
   event.target.classList.add("hidden")
   event.target.insertAdjacentHTML("afterend", `<p class="">${data.message}</p>`)
})