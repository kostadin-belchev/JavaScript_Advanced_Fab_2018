function attachEvents() {
    // TODO: …
    let addButton = $('#btnAdd').click(add);
    let deleteButton = $('#btnDelete').click(del);
    let townSelect = $('#towns');
    let textBox = $('#newItem');

    function add() {
        //alert('test')
        // If the textbox is empty, it should do nothing.
        if (textBox.val() !== '') {
            let optionToAdd = $('<option>').text(`${textBox.val()}`);
            townSelect.append(optionToAdd);
            textBox.val('');
        }
    }

    function del() {
        // The [Delete] button should delete selected item from the list. If no item is selected, it should do nothing.
        // When an item is selected it has the property selected.
        // alert('test2')
        let towns = $('#towns option');
        towns.each((index, element) => {
            if ($(element).is(':selected')) {
                $(element).remove();
            }
        });
    }
}