class Stopwatch {
    constructor({interval = 100, round = 0, ...selectors}) {
        this.time = 0;
        this.intervalId = null;
        this.interval = interval;
        this.round = round;
        this.selectors = selectors;
    }

    init() {
        const {timeSelector, startSelector, stopSelector, resetSelector} = this.selectors;
        this.timeElement = document.querySelector(timeSelector);
        this.startButton = document.querySelector(startSelector);
        this.stopButton = document.querySelector(stopSelector);
        this.resetButton = document.querySelector(resetSelector);
        this.startButton.addEventListener("click", ()=> this.start());
        this.stopButton.addEventListener("click", ()=> this.stop());
        this.resetButton.addEventListener("click", ()=> this.reset());
    }

    start() {
        if(!this.intervalId) {
            this.intervalId = setInterval(()=> {
                const {time, interval, round, timeElement} = this;
                console.log(interval);
                this.time = time + interval / 1000;
                timeElement.textContent = this.time.toFixed(round);
            }, this.interval);
        }
    }

    stop() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    reset(){
        this.stop();
        this.time = 0;
        this.timeElement.textContent = 0;
    }
}

export default Stopwatch;