function countdown(seconds) {
    let box = document.getElementById('time');
    let timer = setInterval(decrease, 1000);

    function decrease() {
        seconds--;
        let minutes = Math.floor(seconds / 60);
        let seconds = seconds % 60;
        box.value = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds); 
    }
}