function addItem() {
    let liItem = document.createElement('li');
    liItem.textContent = document.getElementById('newItemText').value;
    let list = document.getElementById('items');
    list.appendChild(liItem);
    document.getElementById('newItemText').value = '';
}