function timer() {
    let startButton = $('#start-timer').on('click', startStopwatch)
    let stopButton = $('#stop-timer').on('click', pauseStopwatch);
    let timer;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function startStopwatch() {
        clearInterval(timer);
        timer = setInterval(step, 1000);
    }

    function pauseStopwatch() {
        clearInterval(timer);
    }

    function step() {
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }
        if (minutes > 59) {
            minutes = 0;
            hours++;
        }
        let hoursSpan = $('#hours');
        let minutesSpan = $('#minutes');
        let secondsSpan = $('#seconds');
        secondsSpan.text(('0' + seconds).slice(-2));
        minutesSpan.text(('0' + minutes).slice(-2));
        hoursSpan.text(('0' + hours).slice(-2));
    }
}
