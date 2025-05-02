/*
Напишіть код, який працює так:
1. Користувач вводить справу в поле введення, натискає кнопку Add case, і воно з'являється в списку.
2. При наведенні на справу у правому верхньому кутку з'являється хрестик, при натисканні на який справа
видаляється зі списку.
*/
// як що мене треба на створений елмент повісити подію то я маю робити це в тій же функції що створює елемент
const newCaseEl =  document.querySelector("#newcase")
const caseList = document.querySelector("#case-list")

newCaseEl.addEventListener("click", function(event) {
   event.preventDefault(); // Запобігає стандартному відправленню форми
    const caseNameEl = document.querySelector("#case-name") //caseNameEl.value Якщо caseNameEl є елементом введення (<input> або <textarea>), то textContent не працюватиме, оскільки ці елементи не містять текстовий вміст у своєму дереві DOM. Натомість слід використовувати .value:
    caseList.insertAdjacentHTML("beforeend", `<li class="case-item">${caseNameEl.value}<span class="close">&times;</span></li>`)
    const closeEl = document.querySelector(".case-item:last-child .close")
    
    caseNameEl.value = ""; // Очищення поля вводу після натискання
    
    closeEl.addEventListener("click", function(event){
       event.target.closest('li').remove()
    })
    //або
    //const form = document.querySelector("form"); // Отримуємо форму
    //form.reset(); // Очищення всіх полів форми
    
    // як повісити подію на елемент який ти тільки що додав
    // const caseItemElement = document.querySelector(".case-item:last-child")
    // caseItemElement.addEventListener("mouseover", function(event){
    //         event.target.insertAdjacentHTML("beforeend", `<span class="close">&times;</span>`)
    // })
    // caseItemElement.addEventListener("mouseout", function(event){
    //     const closeElement = this.querySelector(".close")
    //     closeElement.remove()
    // })

});

// caseList.addEventListener("mouseover", function(event){
//     if (event.target.classList.contains("case-item")) {
//         event.target.insertAdjacentHTML("beforeend", `<span class="close">&times;</span>`)
//     }
    

// })

// caseList.addEventListener("click", function(event) {
//     if (event.target.classList.contains("close")) {
//        // console.log(event.target.closest('li'));// closest знаходть найближчого батька 
//        event.target.closest('li')?.remove()
//     }
// });