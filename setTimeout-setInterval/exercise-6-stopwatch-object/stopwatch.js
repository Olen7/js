const stopwatch = {
    time: 0,
    intervalId: null,
    start(callback) {
        if(!this.intervalId) {
            this.intervalId = setInterval(()=> {
                this.time = this.time + 0.1;
                if(callback) callback(this.time);
            }, 100);
        }
    },
    stop(callback) {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            if(callback) callback(this.time);
        }
    },
    reset(callback){
        this.stop();
        this.time = 0;
        if(callback) callback(this.time);
    }
};

export default stopwatch;