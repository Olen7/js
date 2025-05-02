/*
Зробіть всі параграфи з класом "main-text" всередині div з id="main" червоного колору,
але параграф з id="last-main-text" зробіть синього колору.
Додайте елементу з id="second-text" зелений фон.
*/
const mainElements = document.querySelectorAll("#main .main-text")
mainElements.forEach(el => el.style.color = 'red')
const lastMainElement = document.querySelector("#last-main-text")
lastMainElement.style.color = "blue"
const secondText = document.querySelector("#second-text")
// secondText.style.backgroundColor = 'green'
secondText.style["background-color"] = 'green'
console.log(mainElements);
console.log(lastMainElement);