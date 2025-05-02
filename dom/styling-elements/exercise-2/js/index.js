/*
Додай до тегів a, які знаходяться всередині елементу з класом "navbar-nav", клас "navbar-nav-link". Першому тегу а
додай також класс "active"
*/
const navbarNavElement = document.querySelectorAll(".navbar-nav a")
navbarNavElement[0].classList.add("active")
navbarNavElement.forEach(el => el.classList.add("navbar-nav-link"))
console.log(navbarNavElement);