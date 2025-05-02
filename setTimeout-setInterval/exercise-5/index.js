/*
Напишіть секундомір. Він має працювати так:
 1. При першому натисканні на кнопку з id="stopwatch-start" запускається секундомір з кроком 0,1 секунду.
 Час виводиться в p з id = "stopwatch-time".
 2. При натисканні на кнопку з id="stopwatch-pause" якщо секундомір запущено - він зупиняється, і
 час p з id="stopwatch-time" зберігається.
 3. Якщо секундомір було зупинено, то натискання кнопки з id="stopwatch-start" заново його запускає.
 4. Якщо секундомір працює, то повторне натискання кнопки з id="stopwatch-start" ні до чого не призводить.
 5. Якщо секундомір зупинено, то повторне натискання кнопки з id="stopwatch-pause" ні до чого не призводить.
 6. При натисканні на кнопку id="stopwatch-reset" секундомір обнулюється (і зупиняється, якщо він був запущений).
 7. Час у секундомірі повинен зберігатися між перезавантаженнями сторінки, якщо воно не було скинуто (Reset).
 Схожий приклад ви можете знайти тут - https://jsfiddle.net/ezmilhouse/V2S9d/
*/

//спробувати переписати це на обєкт і назвати stopWatch

// а потім переробити на клас
const stopwatchTime = document.getElementById("stopwatch-time")

const stopwatchStart = document.getElementById("stopwatch-start")
const stopwatchPause = document.getElementById("stopwatch-pause")
const stopwatchReset = document.getElementById("stopwatch-reset")

let countTime = Number(localStorage.getItem("countTime")) || 0;
stopwatchTime.textContent = countTime.toFixed(1)
let intervalId = null;
stopwatchStart.addEventListener('click', function(event){
    if (!intervalId) {
        intervalId = setInterval(()=>{
            localStorage.setItem("countTime", countTime);
            stopwatchTime.textContent = countTime.toFixed(1);
            countTime += 0.1 
        },100)
    }
    
})
stopwatchPause.addEventListener("click", (event)=>{
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null;
    }
})
stopwatchReset.addEventListener('click', (event)=>{
    countTime = 0;
    stopwatchTime.textContent = countTime.toFixed(1)
    localStorage.setItem("countTime", countTime)
    if (intervalId){
        clearInterval(intervalId);
        intervalId = null;
    }
})
