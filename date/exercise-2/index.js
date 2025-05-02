/*
Напишіть функцію isLeapYear, яка отримує в якості аргументу рік,
і повертає true, якщо рік був високісним, і false - якщо ні.
*/
function isLeapYear(year){//2024
    // зрозуміти коли рік вважається втсокісним
    const date = new Date(year, 2, 0) // отримуємо остані день лютого і скільки днів в ньому
    return date.getDate() === 29
}
console.log(isLeapYear(2024));