const btnElements = document.querySelectorAll(".btn");

btnElements.forEach(el => el.addEventListener("click", (e)=> {
    e.preventDefault(); // e.preventDefault() відміняє стандартну реакцію браузера на цю подію
    e.target.classList.toggle("active");
}))