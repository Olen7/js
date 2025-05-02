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

import stopwatch from "./stopwatch.js";

const stopwatchTime = document.getElementById("stopwatch-time");

const stopwatchStart = document.getElementById("stopwatch-start");
const stopwatchPause = document.getElementById("stopwatch-pause");
const stopwatchReset = document.getElementById("stopwatch-reset");

const changeTimeInParagraph = time => {
    stopwatchTime.textContent = time.toFixed(1);
};

const resetTimeInParagraph = ()=> stopwatchTime.textContent = 0;

stopwatchStart.addEventListener("click", ()=> stopwatch.start(changeTimeInParagraph));
stopwatchPause.addEventListener("click", ()=> stopwatch.stop());
stopwatchReset.addEventListener("click", ()=> stopwatch.reset(resetTimeInParagraph));

/*
const stopWatch = {
    countTime: Number(localStorage.getItem("countTime")) || 0,
    intervalId: null,
    startTimer() {
      stopwatchStart.addEventListener("click", (event) => {
        if (!this.intervalId) {
          this.intervalId = setInterval(() => {
            localStorage.setItem("countTime", this.countTime);
            stopwatchTime.textContent = this.countTime.toFixed(1);
            this.countTime += 0.1;
          }, 100);
        }
      });
    },
    deactivateInterval() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    pauseTimer() {
      stopwatchPause.addEventListener("click", (event) => {
        this.deactivateInterval();
      });
    },
    resetTimer() {
      stopwatchReset.addEventListener("click", (event) => {
        this.countTime = 0;
        stopwatchTime.textContent = this.countTime.toFixed(1);
        localStorage.setItem("countTime", this.countTime);
        this.deactivateInterval();
      });
    },
  };

    stopwatchTime.textContent = stopWatch.countTime.toFixed(1);
  stopWatch.startTimer();
  stopWatch.pauseTimer();
  stopWatch.resetTimer();
  */
