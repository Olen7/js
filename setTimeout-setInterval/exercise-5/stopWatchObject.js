const stopwatchTime = document.getElementById("stopwatch-time");

const stopwatchStart = document.getElementById("stopwatch-start");
const stopwatchPause = document.getElementById("stopwatch-pause");
const stopwatchReset = document.getElementById("stopwatch-reset");

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
