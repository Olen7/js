 /*
Напишіть код, який працює так: користувач вводить справу в поле введення, 
натискає на кнопку Add case, і вона з'являється у списку.
 */
const addCaseElement = document.querySelector("#add-case")
const caseNameElement = document.querySelector("#case-name")
const caseListElement = document.querySelector("#case-list")

addCaseElement.addEventListener("click", function(){
    caseListElement.insertAdjacentHTML("beforeend", `<li class="case-item">${caseNameElement.value}</li>`)
    console.log(caseNameElement.value);
})

// в input щоб дізнатись текст який написано можна через value
// insertAdjacentHTML - створює розмітку першим аргуметом куди додати другим <li class="case-item">${caseNameElement.value}</li>
//<li class="case-item">текст з input</li> 