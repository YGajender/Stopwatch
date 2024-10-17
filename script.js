var hr = 0;
var min = 0;
var sec = 0;
var timer;

function start() {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    hr = 0;
    min = 0;
    sec = 0;
    updateDisplay();
}

function updateTime() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
        if (min === 60) {
            min = 0;
            hr++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("hr").innerHTML = hr < 10 ? "0" + hr : hr;
    document.getElementById("min").innerHTML = min < 10 ? "0" + min : min;
    document.getElementById("sec").innerHTML = sec < 10 ? "0" + sec : sec;
}
