/*
Створіть логіку реєстрації користувача та виводу цієї інфомації на екран:
1. Виведіть на екран форму з id="register-form". Налаштування полів візьміть з масива fields.
2. При надсиланні форми поруч із нею в div з id="register-info" виведіть повідомлення "Ви успішно зареєструвалися, {username}".
В index.html файлі ви можете знайти приклад розмітки форми за div з повідомленням, але малювати її треба за допомогою JS.
*/
import { creatTextField } from "./creatTextField.js";
import serializeForm  from "./serializeForm.js"
const fields = {
  username: {
    label: "Username",
    type: "text",
    name: "username",
    placeholder: "Username",
    required: true,
  },
  email: {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Email",
    required: true,
  },
  password: {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Password",
    required: true,
  },
};

const registerForm = document.createElement("form");
registerForm.id = "register-form";
document.body.prepend(registerForm);
registerForm.insertAdjacentHTML(
  "beforeend",
  `${creatTextField(fields.username)}
         ${creatTextField(fields.email)}
         ${creatTextField(fields.password)}
        <button type="submit">Register</button>`
);

registerForm.insertAdjacentHTML(
  "afterend",
  `<div id="register-info" class = 'register-info-item'></div>`
);

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = serializeForm(event.target)
  const registerInfo = document.querySelector("#register-info")
  registerInfo.querySelector('p')?.remove()
  registerInfo.insertAdjacentHTML("beforeend", `<p>Ви успішно зареєструвалися, ${data.username}.</p>`)
  event.target.reset() 
  console.log(data);
});
