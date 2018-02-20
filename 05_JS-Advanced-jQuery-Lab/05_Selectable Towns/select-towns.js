function attachEvents() {
    // TODO
    $('#items').on('click', 'li', onClick);
    $('#showTownsButton').on('click', showTowns)
    function onClick () {
        let li = $(this);
        if(li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '');
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    }

    function showTowns() {
        let selectedLis = $('#items li[data-selected="true"]');
        let towns = selectedLis.toArray().map((li) => li.textContent).join(', ');
        $('#selectedTowns').text('Selected towns: ' + towns);
    }
}
