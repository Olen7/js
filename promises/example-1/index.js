// const countElement = document.getElementById("count");
// for(let i = 0; i < 100000; i+=1) {
//     countElement.textContent = i;
// }
// console.log("After for");

const request = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        const date = new Date();
        if(date.getDay() !== 0) {
            reject(new Error("Пива немає"));
            // request.state = "rejected";
            // request.result = new Error("Пива немає");
        }
    
        resolve(["1 ящик нефільтрованого", "1 ящик фільтрованого"]);
        // request.state = "fulfilled";
        // request.result = "Взяв 2 ящики"
    
    }, 3000);
});
// request.state = "pending";
// request.result = undefined;
const list = document.getElementById("list");

request
    .then(items => {
        const elements = items.map(text => `<li>${text}</li>`).join("");
        return elements;
    }) 
    /*
    const response = callback(result);
    const newPromise = new Promise((resolve, reject)=> resolve(response))
    */
    .then(elements => list.insertAdjacentHTML("beforeend", elements))    
    .catch(error => {
        list.insertAdjacentHTML("afterend", `<p style="color: red">${error.message}</p>`)
    });

console.log("After promise");
