/*
Напишіть код реєстрації користувача, який працює так:
1. Якщо якесь поле не заповнене, то вивести під нім повідомлення "Це поле обов'язкове для заповнення".
2. Якщо поля "password" та "repeat-password" не співпадають, під полем "repeat-password"

*/
import serializeForm from "./serializeForm.js";
import checkRequiredFields from "./checkRequiredFields.js";
const users = [];

const registerFormEl = document.querySelector("#register-form");
registerFormEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((el) => el.remove());
  const isEmptyRequiredField = checkRequiredFields(event.target, [
    "email",
    "password",
    "repeat-password",
    "username",
  ]);
  if (isEmptyRequiredField) return;
  const data = serializeForm(event.target);
  if (data.password !== data["repeat-password"]) {
   return event.target.elements["repeat-password"].insertAdjacentHTML(
        "afterend",
        `<p class="error">паролі не співпадають</p>`
      );
    
  }

  const isUserEmail = users.find(el => el.email === data.email)

  if (isUserEmail) {
    return event.target.elements.email.insertAdjacentHTML(
        "afterend",
        `<p class="error">email вже існує</p>`
      );
  }
  users.push(data);
  registerFormEl.reset();
});

function id(){
   
  return 
}
