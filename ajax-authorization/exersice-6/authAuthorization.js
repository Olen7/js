import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} from "./api/auth.js";
import serializeForm from "./serializeForm.js";
import { displayMovies, toggleMovies } from "./movies.js";
function toggleAuth() {
  register.classList.toggle("hidden");
  login.classList.toggle("hidden");
}
const register = document.querySelector("#register");
const login = document.querySelector("#login");
const token = localStorage.getItem("auth");
const toRegister = document.querySelector("#to-register");
const toLogin = document.querySelector("#to-login");
const logout = document.querySelector("#logout");
if (!token) {
  register.classList.remove("hidden");
} else {
  currentUser(token).then(({ data, error }) => {
    if (data) {
      const body = document.body;
      body.insertAdjacentHTML(
        "afterbegin",
        `<div class="user-info">
        <button type="button" id="logout" class="btn-logout">Logout</button>
        <p class="user-email">${data.email}</p>
    </div>`
      );
      displayMovies();
      return addLogout("logout");
    }
    login.classList.remove("hidden");
  });
}
toRegister.addEventListener("click", toggleAuth);
toLogin.addEventListener("click", toggleAuth);
register.addEventListener("submit", async function (event) {
  event.preventDefault();
  if (event.target.nextElementSibling?.classList.contains("error")) {
    event.target.nextElementSibling.remove();
  }
  const payload = serializeForm(event.target);
  const { data, error } = await registerUser(payload);
  if (error) {
    return event.target.insertAdjacentHTML(
      "afterend",
      `<p class="error">${error.response.data.message}</p>`
    );
  }
  toggleAuth();
});

login.addEventListener("submit", async function (event) {
  event.preventDefault();
  if (event.target.nextElementSibling?.classList.contains("error")) {
    event.target.nextElementSibling.remove();
  }
  const payload = serializeForm(event.target);
  const { data, error } = await loginUser(payload);
  if (error) {
    return event.target.insertAdjacentHTML(
      "afterend",
      `<p class="error">${error.response.data.message}</p>`
    );
  }
  displayMovies();
  localStorage.setItem("auth", data.data.token);
  console.log(event.target);
  event.target.classList.add("hidden");
  event.target.insertAdjacentHTML(
    "afterend",
    `<div class="user-info">
        <button type="button" id="logout" class="btn-logout">Logout</button>
        <p class="user-email">${data.data.user.email}</p>
    </div>`
  );

  addLogout("logout");
});

function addLogout(id) {
  const logoutBtn = document.querySelector(`#${id}`);
  logoutBtn.addEventListener("click", async function (event) {
    const { error } = await logoutUser();
    if (error) {
      return event.target.insertAdjacentHTML(
        "afterend",
        `<p class="error">${error.response.data.message}</p>`
      );
    }
    toggleMovies();
    localStorage.removeItem("auth");
    if (event.target.nextElementSibling?.classList.contains("error")) {
      event.target.nextElementSibling.remove();
    }
    event.target.nextElementSibling.remove();
    logoutBtn.remove();
    login.classList.toggle("hidden");
  });
}
