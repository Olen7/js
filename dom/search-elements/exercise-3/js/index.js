/*
Приберіть маркери у списку.
Зробіть шрифт у елементах списку жирним.
Зробіть кожен другий елемент списку на сірому фоні.
*/
const peopleListElement = document.querySelector('#people-list')
peopleListElement.style["list-style"] = "none"
const peopleListElements = peopleListElement.querySelectorAll('li')
peopleListElements.forEach(element => element.style.fontWeight = "bold");
// const peopleListEvenElements = peopleListElement.querySelectorAll('li:nth-child(even)')
for (let index = 1; index < peopleListElements.length; index += 2) {
    peopleListElements[index].style.backgroundColor = "grey"
}
peopleListElements.forEach(element => element);
console.log(peopleListElements);