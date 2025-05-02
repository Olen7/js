class Stopwatch {
    constructor(interval = 100) {
        this.time = 0;
        this.intervalId = null;
        this.interval = interval;
    }

    start(callback) {
        if(!this.intervalId) {
            this.intervalId = setInterval(()=> {
                this.time = this.time + this.interval / 1000;
                if(callback) callback(this.time);
            }, this.interval);
        }
    }

    stop(callback) {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            if(callback) callback(this.time);
        }
    }

    reset(callback){
        this.stop();
        this.time = 0;
        if(callback) callback(this.time);
    }
}

export default Stopwatch;