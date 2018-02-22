function domSearch(selector, caseSensitivity) {
    // caseSensitivity -> If set to true, searches are case sensitive, if set to false, 
    // or not set, searches ignore casing.
    let contentDiv = $('#content');

    // Place the add controls inside a div with a class add-controls
    let addControlsDiv = $('<div>').addClass('add-controls');
    //let labelAdd = $('<label>Enter text: <input></label>');
    let inputAdd = $('<input>').attr('id', 'inputAdd');
    let labelAdd = $('<label>').text('Enter text: ').append(inputAdd);
    let ancherAdd = $('<a>').addClass('button').text('Add').css('display', 'inline-block').click(add);
    addControlsDiv.append(labelAdd);
    addControlsDiv.append(ancherAdd);
    contentDiv.append(addControlsDiv);

    function add() {
        //alert(`Testing Add button -> ${$("#inputAdd").val()}`)
        let inputText = $("#inputAdd").val();
        // SEE line 34 how to add the element after the Add button is licked
        // All that below must go in this function, I think
    }

    // Place the search controls inside a div with a class search-controls
    let searchControlsDiv = $('<div>').addClass('search-controls');
    let labelSearch = $('<label>').text('Search: ').append('<input>');
    searchControlsDiv.append(labelSearch);
    contentDiv.append(searchControlsDiv);

    // Place the result controls inside a div with a class result-controls 
    let elementName = 'Element 1'; // CHANGE THIS LATER only a test
    let resultControlsDiv = $('<div>').addClass('result-controls');
    let list = $('<ul>').addClass('items-list');
    let listItem = $('<li>').addClass('list-item');
    let ancherX = $('<a>').addClass('button').text('X');
    let boldElement = $('<strong>').text(`${elementName}`);  
    listItem.append(ancherX)//.append(boldElement);
    list.append(listItem);
    resultControlsDiv.append(list);
    contentDiv.append(resultControlsDiv);
}
