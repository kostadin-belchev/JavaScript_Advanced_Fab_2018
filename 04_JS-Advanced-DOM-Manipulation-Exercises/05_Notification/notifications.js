//Created by *** Kostadin Belchev ***
function notify(message) {
    // TODO:
    let notifyDiv = document.getElementById('notification');
    notifyDiv.textContent = message;
    notifyDiv.style.display = 'block';
    let timeOutID = setTimeout(timeOutHandler, 2000);

    function timeOutHandler() {
        notifyDiv.style.display = 'none';
    }
}