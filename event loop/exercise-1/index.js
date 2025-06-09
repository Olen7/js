// 1. Call Stack       – тут виконуються функції
// 2. Web APIs         – setTimeout, fetch і т.д. обробляються тут
// 3. Callback Queue   – тут чекають колбеки setTimeout
// 4. Microtask Queue  – тут чекають .then, async/await (пріоритет!)
// 5. Event Loop       – головний «керівник»


//Завдання 1 — Поясни порядок виводу
console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");

/*
1 "start"
2 "end"
3 "promise"
4  "timeout"
 */


//Завдання 2 — Складніший Event Loop

console.log("A");

setTimeout(() => {
  console.log("B");
  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");

/*
1 "A"
2 "E"
3 "D"
4 "B"
5 "C"
*/

//Завдання 3 — Порядок виконання з queueMicrotask
setTimeout(() => console.log("timeout"), 0);

queueMicrotask(() => console.log("microtask 1"));

Promise.resolve().then(() => console.log("promise"));

queueMicrotask(() => console.log("microtask 2"));

console.log("sync");
/*
1 "sync"
2 "microtask 1"
3 "promise"
4 "microtask 2"
5 "timeout"
*/