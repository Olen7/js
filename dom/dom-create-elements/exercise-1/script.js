/*
В циклі запитувати у користувача за допомогою prompt справу, 
і виводити його всередину тега з id="case-list" як елемент списку на екран. 
Якщо користувач ввів пропуск або порожній рядок - справа не додавати, але запитати таке.
Якщо він натисне Cancel - цикл припинити.
*/
let input = prompt("Напишіть вашу справу")
const caseList = document.getElementById("case-list")

while(input !== null){ //? перевіряє чи input є null або undefine 
    if (input.trim()) {
        const li = document.createElement('li')
        li.textContent = input;
        caseList.append(li)
    }
  input = prompt("Напишіть вашу наступну справу")
}

console.log(input);