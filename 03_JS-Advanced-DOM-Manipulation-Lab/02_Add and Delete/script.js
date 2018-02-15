function addItem() {
    let list = document.getElementById('items')
    let textToAdd = document.getElementById('newText').value;
    let liItem = document.createElement('li');

    liItem.innerHTML = textToAdd + ' <a href="#">[Delete]</a>';
    liItem.children[0].addEventListener('click', (event) => deleteItem(event));

    list.appendChild(liItem);
    document.getElementById('newText').value = '';

    function deleteItem (event) {
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    }
}