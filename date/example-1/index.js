// const date = new Date();
// const date = new Date(2024, 11);
// const date = new Date("2017-03-22");
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

// date.setFullYear(2024);
// console.log(date);

const date1 = new Date();
// const date2 = new Date(2024, 2, 30);
// console.log(date1 - date2);
// console.log(Date.now())
// UNIX-час - скільки пройшло мілісекунд з 1 січня 1970 року (час створеня UNIX)
document.body.insertAdjacentHTML("beforeend", `<p>${date1.toDateString()}</p>`)
document.body.insertAdjacentHTML("beforeend", `<p>${date1.toLocaleDateString()}</p>`)
document.body.insertAdjacentHTML("beforeend", `<p>${date1.toISOString()}</p>`)
// const date3 = new Date("2025-03-30T16:01:18.914Z");
// console.log(date3)
const date3 = new Date("2025 03 12");
console.log(date3)