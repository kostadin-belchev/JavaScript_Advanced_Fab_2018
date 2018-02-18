//Created by *** Kostadin Belchev ***
function create(sentences) {
    let content = document.getElementById('content');
    for (let string of sentences) {
        let newDiv = document.createElement('div');
        let newP = document.createElement('p');
        newP.style.display = 'none';
        newP.textContent = string;
        newDiv.appendChild(newP);
        newDiv.addEventListener('click', onClick);
        content.appendChild(newDiv);
    }

    function onClick(event) {
        event.target.firstChild.style.display = 'block';
    }
}