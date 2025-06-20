/*
POST /api/auth/signup: username, email, password
POST /api/auth/login: email, password
GET /api/auth/current: токен в Authorization
POST /api/auth/logout: токен в Authorization
url: https://redux-auth-backend-ioyk.onrender.com/
*/
import serializeForm from "./serializeForm.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} from "./api/auth.js";
import { removePrevError } from "./removePrevError.js";
import { renderMovieSection } from "./userView/renderMovieSection.js";
import { handleApiError } from "./userView/handleApiError.js";
const login = document.querySelector("#login");
const register = document.querySelector("#register");
const toggleRegister = document.querySelector("#toggle-register");
const toggleLogin = document.querySelector("#toggle-login");
const token = localStorage.getItem("token");
const movieSection = document.querySelector(".movie-section");
const findByIdForm = document.querySelector("#find-by-id-form");
const moviesList = document.querySelector("#movies-list");
function toggleAuth() {
  removePrevError("error");
  login.classList.toggle("hidden");
  register.classList.toggle("hidden");
}
// 1 як що немає відображаю форму реєстрації
// 1.1 як що є токен то то робимо current запит
if (!token) {
  register.classList.remove("hidden");
} else {
  /*як зрозуміти чи валіднийще токен*/
  currentUser(token).then(({ data, error }) => {
    if (error) {
      handleApiError(error);
      return login.classList.remove("hidden");
    }
    movieSection.classList.remove("hidden");
    renderMovieSection();
    return addLogout("logout");
  });
}

// 2 вішаю два обробника подій на кнопки перемикання міє формами
toggleRegister.addEventListener("click", toggleAuth);
toggleLogin.addEventListener("click", toggleAuth);

// 3 Реєстрація
// 3.1 вішаю обробник подій на форму
// 3.2 функція асинхронна
// 3.3 викликаю events.preventDefault(); для того щоб не перезавантажувати сторінку
// 3.4 збираю данні з форми функцією serializeForm
// 3.5 роблю запит на бекенд registerUser
// 3.6 як що бекенд повертає помилку опрацьовую її
// 3.7 очищаю форму
// 3.8 видаляю помилку функцією removePrevError("error"); --- уточнити в Богдана (Видаляє помилку після оримання відповді з бекенду до того часу вона буде показуватись, 79 рядок переніс на 68)
// 3.9 переключаюсь на форму логіну

register.addEventListener("submit", async function (event) {
  event.preventDefault();
  removePrevError("error");
  const payload = serializeForm(event.target);
  const { error } = await registerUser(payload);
  
  if (error) {
    return handleApiError(error);
  }
  event.target.reset();

  toggleAuth();
});

// 3 Логін
// 3.1 вішаю обробник подій на форму
// 3.2 функція асинхронна
// 3.3 викликаю events.preventDefault(); для того щоб не перезавантажувати сторінку і видаляю розмітку помилку як що вона є
// 3.4 збираю данні з форми функцією serializeForm
// 3.5 роблю запит на бекенд loginUser
// 3.6 як що бекенд повертає помилку опрацьовую її
// 3.7 очищаю форму
// 3.8 Відмальвую сторінку яку User бачить після логіну (Можна зробити і це фунцією де буде створюватись розмітку сторінки яку буде бачити User і використати це в 41 по 44 замінити де робится currentUser запит! Водному місці змінюється і легко використовувати)
// 3.9 додаю localStorage токен
// 3.10 очищаю форму
// 3.11 ховаю форму логіна
// 3.12 викликаю функцію яка знаходить кнопку вішає обробник і робитьзапит на logoutUser()
login.addEventListener("submit", async function (event) {
  event.preventDefault();
  removePrevError("error");
  const payload = serializeForm(event.target);
  const { data, error } = await loginUser(payload);
  if (error) {
    return handleApiError(error);
  }
  localStorage.setItem("token", data.token);
  movieSection.classList.remove("hidden");
  event.target.reset();
  login.classList.add("hidden");
  console.log(payload);
  localStorage.setItem("email", payload.email);
  renderMovieSection();

  return addLogout("logout");
});
// 4 Функція Logout
// 4.1 отримую id і викликаю функцію на пошук помилки! є прибераю якщо немає то код прцює далі
// 4.2 Знаходжу кнопку як що такої немає зупиняю роботу функції
// 4.3 вішаю обробник події і роблю функцію асинхроною
// 4.4 роблю запит logoutUser()
// 4.5 обробляю помилку
// 4.6 як що бекенд повертає помилку опрацьовую її
// 4.7 видаляю токен з  localStorage
// 4.8 знаходжу user-interface це відображення для User і додаю клас hidden можливо краще прибрати розмітку зовсім
//4.9 показую форму лоігн
let isLogoutHandler = false;
function addLogout(id) {
  if (isLogoutHandler) return;
  isLogoutHandler = true;
  removePrevError("error");
  const logoutBtn = document.querySelector(`#${id}`);
  if (!logoutBtn) return;
  logoutBtn.addEventListener("click", async function (event) {
    const { error } = await logoutUser();
    if (error) {
      return event.target.insertAdjacentHTML(
        "afterend",
        `<p class="error">${error.response.data.message}</p>`
      );
    }

    localStorage.removeItem("token");
    document.querySelector(".user-interface")?.classList.add("hidden");
    movieSection?.classList.add("hidden");
    login.classList.remove("hidden");
    findByIdForm.classList.add("hidden");
    moviesList.innerHTML = "";
  });
}


