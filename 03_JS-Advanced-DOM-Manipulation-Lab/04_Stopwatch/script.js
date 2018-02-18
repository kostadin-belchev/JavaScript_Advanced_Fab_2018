function stopwatch () {
    let output = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    let stopButton = document.getElementById('stopBtn');
    startButton.addEventListener('click', startPressed);
    stopButton.addEventListener('click', stopPressed);

    let timer;
    let seconds = 0;

    function tick() {
        seconds++;
        outputTime(seconds);
    }

    function outputTime (value) {
        let minutes = Math.floor(value / 60);
        let secs = value % 60;
        output.textContent = 
        ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((secs < 10) ? '0' + secs : secs);
    }

    function startPressed() {
        seconds = 0;
        outputTime(seconds);
        stopButton.disabled = false;
        startButton.disabled = true;
        timer = setInterval(tick, 1000);
    }

    function stopPressed() {
        stopButton.disabled = true;
        startButton.disabled = false;
        clearInterval(timer);
    }
}