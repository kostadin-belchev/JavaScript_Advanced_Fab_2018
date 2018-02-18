//Created by *** Kostadin Belchev ***
function toggle() {
    let button = document.getElementsByClassName('button')[0];
    console.log('HEllo');
    let hiddenDiv = document.getElementById('extra');
    console.log(hiddenDiv);
    if (hiddenDiv.style.display === 'none') {
        hiddenDiv.style.display = 'block';
        button.textContent = 'Less';
    } else {
        hiddenDiv.style.display = 'none';
        button.textContent = 'More';
    }
}