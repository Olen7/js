/*
Створіть функцію setStyles, яка буде приймати або один DOM-елемент, або масив (псевдомасив) DOM-елементів першим аргументом,
і об'єкт зі стилями, і змінює елементу або елементам ці стилі.
Функцію setStyles винесіть в окремий файл.
Використайте її для пепередніх 3 задач. 
приклад використання:
const mainElementStyles = {
    "font-size": "12px",
    color: "red"
}
const element = document.querySelector("#main");
setStyles(element, mainElementStyles);
*/


import setStyles from "./function/set-styles.js";
const mainElementStyles = {
    "font-size": "12px",
    color: "red"
}
const element = document.querySelector("#main");
console.log(setStyles([element], mainElementStyles));