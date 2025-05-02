
class StopWatch {
  constructor(startBtn, pauseBtn, resetBtn, timeDisplay) {
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    this.resetBtn = resetBtn;
    this.timeDisplay = timeDisplay;
    this.countTime = Number(localStorage.getItem("countTime")) || 0;
    
    this.intervalId = null;
    this.timeDisplay.textContent = this.countTime.toFixed(1);
  };
  startTimer() {
    this.startBtn.addEventListener("click", (event) => {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          localStorage.setItem("countTime", this.countTime.toFixed(1));
          this.timeDisplay.textContent = this.countTime.toFixed(1);
          this.countTime += 0.1;
        }, 100);
      }
    });
  }
  deactivateInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  pauseTimer() {
    this.pauseBtn.addEventListener("click", (event) => {
      this.deactivateInterval();
    });
  }
  resetTimer() {
    this.resetBtn.addEventListener("click", (event) => {
      this.countTime = 0;
      this.timeDisplay.textContent = this.countTime.toFixed(1);
      localStorage.setItem("countTime", this.countTime);
      this.deactivateInterval();
    });
  }
}
const watch =  new StopWatch(
    document.getElementById("stopwatch-start"),
    document.getElementById("stopwatch-pause"),
    document.getElementById("stopwatch-reset"),
    document.getElementById("stopwatch-time")
  );

watch.startTimer();
watch.pauseTimer();
watch.resetTimer();
