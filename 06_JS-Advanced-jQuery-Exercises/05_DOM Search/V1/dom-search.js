function domSearch(selector, caseSensitivity) {
    // caseSensitivity -> If set to true, searches are case sensitive, if set to false, 
    // or not set, searches ignore casing.
    // SKELETON
    let contentDiv = $(selector);

    // Place the result controls inside a div with a class result-controls 
    let resultControlsDiv = $('<div>').addClass('result-controls');
    let list = $('<ul>').addClass('items-list');

    // Place the add controls inside a div with a class add-controls
    let addControlsDiv = $('<div>').addClass('add-controls');
    //let labelAdd = $('<label>Enter text: <input></label>');
    let inputAdd = $('<input>').attr('id', 'inputAdd');
    let labelAdd = $('<label>').text('Enter text: ').append(inputAdd);
    let anchorAdd = $('<a>').addClass('button').text('Add').css('display', 'inline-block').click(add);
    addControlsDiv.append(labelAdd);
    addControlsDiv.append(anchorAdd);
    

    // Place the search controls inside a div with a class search-controls
    let searchControlsDiv = $('<div>').addClass('search-controls');
    let labelSearch = $('<label>').text('Search: ').append($('<input>').on('input', searchElements))
    
    searchControlsDiv.append(labelSearch);
    contentDiv.append(searchControlsDiv);
    
    contentDiv.append(addControlsDiv);
    //When the user starts typing,
    // the list of items should display only the items that contain the given string
    function searchElements() {
        let searchPattern = $(this).val();
        let entries = $('.list-item strong');
        // remove the style after the search string is removed!
        
        if (caseSensitivity) {
            //alert('Case sensitive search performed');
            //console.log(searchPattern);
            entries.each((index, element) => {
                let strong = $(element);
                let strongString = $(element).text();
                let searchPattern = searchPattern;
                
                if (!strongString.includes(searchPattern)) {
                    strong.parent().css('display', 'none');
                } else {
                    strong.parent().css('display', '');
                }
            });
        } else {
            //alert('Case incensitive search performed');
            //console.log(searchPattern);
            entries.each((index, element) => {
                let strong = $(element);
                let strongStringLowerCase = $(element).text().toLowerCase();
                let searchPatternLowerCase = searchPattern.toLowerCase();
                
                if (!strongStringLowerCase.includes(searchPatternLowerCase)) {
                    strong.parent().css('display', 'none');
                } else {
                    strong.parent().css('display', '');
                }
            });
        }
        
        
    }

    function add() {
        //alert(`Testing Add button -> ${$("#inputAdd").val()}`)
        // creating the list item
        let inputText = $("#inputAdd").val();
        let listItem = $('<li>').addClass('list-item');
        let anchorX = $('<a>').addClass('button').text('X').click(deleteElement);
        let boldElement = $('<strong>').text(`${inputText}`);
        // adding the list item and all it's components to the HTML
        listItem.append(anchorX).append(boldElement);
        list.append(listItem);
        resultControlsDiv.append(list);
        contentDiv.append(resultControlsDiv);

        // removing the list item when X anchor is clicked
        function deleteElement() {
            $(this).parent().fadeOut(()=>remove()); //adding animation, but not necessary
        }
    }
}
