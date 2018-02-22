function createBook(selector, title, author, ISBN) {
    // After the book is created it should be attached to the passed in selector.
    let bookGenerator = function () {
        let id = 1;
        return function (selector, title, author, ISBN) {
            // Code
            let container = $(selector);
            let fragment = document.createDocumentFragment();
            let divBook = $('<div>');
            divBook.attr('id', `book${id}`).css('border', 'none');
            divBook.append($('<p>').addClass('title').text(`${title}`));
            divBook.append($('<p>').addClass('author').text(`${author}`));
            divBook.append($('<p>').addClass('isbn').text(`${ISBN}`));
            divBook.append($('<button>').text('Select').on('click', selectHandler));
            divBook.append($('<button>').text('Deselect').on('click', deselectHandler));

            function selectHandler() {
                //alert('Selected');
                $(this).parent().css('border', '2px solid blue');
            }

            function deselectHandler() {
                //alert('Deselected');
                $(this).parent().css('border', 'none');
            }

            // adding elements to the HMTL
            divBook.appendTo(fragment);
            container.append(fragment);

            id++;
        }
    } ();

    bookGenerator(selector, title, author, ISBN);
}
