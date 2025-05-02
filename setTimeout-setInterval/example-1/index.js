const firstWord = document.getElementById("welcome-text-first-word");
const secondWord = document.getElementById("welcome-text-second-word");

// const sayWelcome = ()=> {
//     firstWord.textContent = "Welcome ";
//     secondWord.textContent = "friend";
// }

// setTimeout(sayWelcome, 3000);
// console.log("After setTimeout");
// setTimeout(()=> firstWord.textContent = "Welcome ", 2000);
// setTimeout(()=> secondWord.textContent = "friend", 3000);

const loader = document.getElementById("loader");

// const loadingBaseTime = 2000;
// const timeoutId = setTimeout(()=> loader.textContent = "Loadind ", loadingBaseTime);
// setTimeout(()=> loader.insertAdjacentHTML("beforeend", ". "), 2500);
// setTimeout(()=> loader.insertAdjacentHTML("beforeend", ". "), 3000);
// setTimeout(()=> loader.insertAdjacentHTML("beforeend", ". "), 3500);
// setTimeout(()=> loader.insertAdjacentHTML("beforeend", ". "), 4000);
// const loaderDots = Array(5).fill(". ");
// Array(5).fill(". ").forEach((text, index) => {
//     setTimeout(()=> loader.insertAdjacentHTML("beforeend", text), loadingBaseTime + (index + 1) * 500)
// })

// setTimeout(()=> {
//     loader.textContent = "Loadind ";
//     let counter = 0;
//     const intervalId = setInterval(()=> {
//         loader.insertAdjacentHTML("beforeend", ". ");
//         counter += 1;
//         if(counter === 10) {
//             clearInterval(intervalId);
//         }
//     }, 500);
// }, 2000);
// setTimeout(()=> console.log("Message"), 0);
// console.log("After setTimeout");
