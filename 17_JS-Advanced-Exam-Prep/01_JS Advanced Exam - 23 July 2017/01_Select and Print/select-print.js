function move(command = '') {
    let availableTownsList = $('#available-towns');
    let selectedTownsList = $('#selected-towns');
    switch (command) {
        case 'right':
            // let availableTownsSelect = document.getElementById( "available-towns" );
            // let selectedTown = availableTownsSelect.options[availableTownsSelect.selectedIndex];
            //alert($(selectedTown).val());
            let selectedItem = $('#available-towns').find(":selected");
            //alert($(selectedItem).val());
            $('#selected-towns').append($(selectedItem));
            //$('#available-towns').remove($(selectedTown)); not needed in jQuery
            break;
        case 'left':
            // let selectedItem2 = $('#selected-towns').find(":selected");
            // $('#available-towns').append(selectedItem2);
            $('#available-towns').append($('#selected-towns').find(":selected"));
            break;
        case 'print':
            $('#output')
            .text($('#selected-towns')
            .find('option').toArray().map(e => e.textContent).join('; '));
            break;
        default:
            break;
    }
}