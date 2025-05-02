
/*Створіть функцію setStyles, яка буде приймати або один DOM-елемент, або масив (псевдомасив) DOM-елементів першим аргументом,
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

export default function setStyles(elements, newStyles){
    // if (element instanceof NodeList || element instanceof HTMLCollection) {
    //    return [...element]
    // }
    // if (element instanceof Element || element instanceof Document) {
    //     return [element].forEach(el => el)
    // }
    const arr = elements.length !== undefined ? [...elements] : [elements] //[div,]
return arr.forEach(el => {
   // Object.entries(newStyles).forEach(([key, value]) => el.style[key] = value)
   Object.assign(el.style, newStyles)
})
}
