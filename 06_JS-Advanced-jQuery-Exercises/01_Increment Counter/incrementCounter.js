function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    // •	<textarea> with class="counter", value="0" and the disabled attribute.
    let textArea = $('<textarea>').addClass('counter').attr('disabled', true).val(0);
    // •	<button> with class="btn", id="incrementBtn" and text "Increment".
    let incrementButton = $('<button>').addClass('btn').attr('id', 'incrementBtn').text('Increment');
    // •	<button> with class="btn", id="addBtn" and text "Add".
    let addButton = $('<button>').addClass('btn').attr('id', 'addBtn').text('Add');
    // •	Unordered list <ul> with class="results".
    let list = $('<ul>').addClass('results');

    incrementButton.on('click', incrementFunction);
    addButton.on('click', addingFunctions);

    // When the [Add] is clicked a new list item (<li>) with text equal to the 
    // current value of the textarea should be added to the unordered list.
    function addingFunctions() {
        let newLi = $('<li>').text(`${textArea.val()}`);
        newLi.appendTo(list)
    }

    // When the [Increment] is clicked the value of the textarea should go up by one 
    // (if it was 0 it should become 1 e.t.c.). 
    function incrementFunction() {
        $(textArea).val(+textArea.val() + 1); // the + sign is like calling Number() funtion on the element following the + sign
    }

    textArea.appendTo(fragment);
    incrementButton.appendTo(fragment);
    addButton.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);
}
