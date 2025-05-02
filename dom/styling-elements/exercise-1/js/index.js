/*
Знайдіть кнопки з класом btn. Першій кнопці додайте класс btn-red, другій - классы btn-red і active.
*/
const btnElement = document.querySelectorAll(".btn")
btnElement[0].classList.add("btn-red")
btnElement[1].classList.add("btn-red", "active")
console.log(btnElement);