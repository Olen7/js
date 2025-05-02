/*
Додайте до елементу з id="addition-info" поля по 15px.
Додайте до всіх p всередині елементу з id="addition-info" margin-right 20px.
*/
const additionInfoElement = document.querySelector("#addition-info")
additionInfoElement.style.padding = "15px"
const additionInfoElementParagraph = additionInfoElement.querySelectorAll("p")
additionInfoElementParagraph.forEach(element => element.style["margin-left"] = "20px")
console.log(additionInfoElementParagraph);