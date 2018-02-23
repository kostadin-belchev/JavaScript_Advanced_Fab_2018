function domSearch(selector, caseSensitivity) {
    let addControls = $('<div>').addClass('add-controls').append($('<label>').text('Enter text: ').append($('<input>')))
    .append($('<a>').addClass('button').text('Add').css('display', 'inline-block').click(add));

    function add() {
        let inputElement = $('label input');
        let inputItem = $('<li>').addClass('list-item')
        .append($('<a>').addClass('button').text('X').click(function(){$(this).parent().remove();}))
        .append($('<strong>').text(`${inputElement.val().trim()}`));

        $('ul.items-list').append(inputItem);
        inputElement.val('');
    }

    let searchControls = $('<div>').addClass('search-controls').append($('<label>').text('Search: ').append($('<input>').on('input', searchFuntion)));

    function searchFuntion() {
        let searchPattern = $(this).val();
        //console.log(searchPattern);
        let itemsToSearch = $('ul.items-list strong').each((index, element) => { // element is an HTML element not jQuery element
            //console.log(`Element ${element.textContent} is of type: ${typeof element}`);
            if (caseSensitivity) {
                if (element.textContent.includes(searchPattern)) {
                    $(element).parent().css('display', '');
                } else {
                    $(element).parent().css('display', 'none');
                }
            } else {
                if (element.textContent.toLocaleLowerCase().includes(searchPattern.toLocaleLowerCase())) {
                    $(element).parent().css('display', '');
                } else {
                    $(element).parent().css('display', 'none');
                }
            }
        })
    }

    let resultsControls = $('<div>').addClass('result-controls').append($('<ul>').addClass('items-list'));

    $(selector).append(addControls).append(searchControls).append(resultsControls);
}
