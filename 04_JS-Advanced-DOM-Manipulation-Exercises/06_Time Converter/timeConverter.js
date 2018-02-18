//Created by *** Kostadin Belchev ***
function attachEventsListeners() {
    // TODO: attach click events to all buttons

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn').addEventListener('click', daysHandler);
    let hoursBtn = document.getElementById('hoursBtn').addEventListener('click', hoursHandler);
    let minutesBtn = document.getElementById('minutesBtn').addEventListener('click', minutesHandler);
    let secondsBtn = document.getElementById('secondsBtn').addEventListener('click', secondsHandler);

    function daysHandler(event) {
        hours.value = Number(days.value) * 24;
        minutes.value = Number(days.value) * 1440;
        seconds.value = Number(days.value) * 86400;
    }

    function hoursHandler(event) {
        days.value = Number(hours.value) / 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(hours.value) * 3600;
    }

    function minutesHandler(event) {
        days.value = Number(minutes.value) / 1440;
        hours.value = Number(minutes.value) / 60;
        seconds.value = Number(minutes.value) * 60;
    }
    function secondsHandler(event) {
        days.value = Number(seconds.value) / 86400;
        hours.value = Number(seconds.value) / 3600;
        minutes.value = Number(seconds.value) / 60;
    }
}
