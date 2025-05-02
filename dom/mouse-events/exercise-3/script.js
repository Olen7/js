/*
Напишіть код, який працює так: при кліку на елемент списку його шрифт стає жирним, 
а фон — світло-сірим. 
*/
const peopleListElement = document.querySelectorAll(".people-list li")
function selectedPeopleListItem(){
    this.classList.toggle("selected")
}
peopleListElement.forEach(el => el.addEventListener("click", selectedPeopleListItem))

