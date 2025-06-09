// 1. Call Stack       – тут виконуються функції
// 2. Web APIs         – setTimeout, fetch і т.д. обробляються тут
// 3. Callback Queue   – тут чекають колбеки setTimeout
// 4. Microtask Queue  – тут чекають .then, async/await (пріоритет!)
// 5. Event Loop       – головний «керівник»


// Напиши функцію runMicrotask, яка приймає callback
// і виконує його в мікротасці (аналог queueMicrotask)

function runMicrotask(callback) {
    return Promise.resolve().then(() => console.log("1"))
}

// Приклад використання:
console.log("start");
runMicrotask(() => console.log("microtask"));
console.log("end");
