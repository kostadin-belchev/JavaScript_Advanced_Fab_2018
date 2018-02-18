//Created by *** Kostadin Belchev ***
function validate() {
    let emailElement = document.getElementById('email');
    emailElement.addEventListener('change', onChange);
    let regex = /^[a-z]+@[a-z]+\.[a-z]+/gm;

    function onChange (event){
        if (!regex.exec(event.target.value)){
            event.target.className = 'error';
        } else {
            event.target.removeAttribute('class')
        }
    }
}