function initializeTable() {

    $('#createLink').click(createCountry);
    addCountry('Bulgaria', 'Sofia');
    addCountry('Germany', 'Berlin');
    addCountry('Russia', 'Moscow');
    fixLinks();

    //fixLinks function
    function fixLinks () {
        // Show all links in the table
        $('tr').find('a').css('display', 'inline');

        // Hide [Up] link in first table data row
        $(`tr:eq(2)`).find("a:contains('Up')").css('display', 'none');

        // Hide the [Down] link in the last table row
        $(`tr:last-child`).find("a:contains('Down')").css('display', 'none');
    }


    //created country from the [Create] button
    function createCountry () {
        let countryName = $('#newCountryText');
        let capitalName = $('#newCapitalText');
        addCountry(countryName.val(), capitalName.val());
        countryName.val('');
        capitalName.val('');
        fixLinks();
    }
    // adds country to DOM tree
    function addCountry (countryName, capitalName) {
        let row = $('<tr>')
        .append($('<td>').text(countryName))
        .append($('<td>').text(capitalName))
        .append($('<td>')
            .append($('<a href="#">').text('[Up]').click(moveUp))
            .append(' ')
            .append($('<a href="#">').text('[Down]').click(moveDown))
            .append(' ')
            .append($('<a href="#">').text('[Delete]').click(deleteItem))
        );
        row.css('display', 'none');
        row.appendTo('#countriesTable');
        row.fadeIn();
    }

    //moveUp function
    function moveUp () {
        //alert('Moved Up!') // checking if linkage works
        let row = $(this).parent().parent();
        row.fadeOut(()=> {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixLinks();
        })
    }

    //moveDown function
    function moveDown(params) {
        //alert('Moved Down!')
        let row = $(this).parent().parent();
        row.fadeOut(()=> {
            row.insertAfter(row.next());
            row.fadeIn();
            fixLinks();
        })
    }

    //deleteItem function
    function deleteItem(params) {
        //alert('Deleted!')
        let row = $(this).parent().parent();
        row.fadeOut( ()=> {
            row.remove();
            fixLinks();
        })
    }
}
