//Created by *** Kostadin Belchev ***
function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', mouseInHandler);
    document.getElementById('gradient').addEventListener('mouseout', mouseOutHandler);

    function mouseInHandler(event) {
        let x = event.offsetX;
        let percentage = (x / (this.clientWidth - 1)) * 100;
        document.getElementById('result').textContent = Math.trunc(percentage) + '%';
    }

    function mouseOutHandler(event) {
        document.getElementById('result').textContent = '';
    }
}