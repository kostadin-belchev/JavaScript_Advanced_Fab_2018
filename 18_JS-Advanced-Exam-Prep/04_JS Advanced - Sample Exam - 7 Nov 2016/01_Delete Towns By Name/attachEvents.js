function attachEvents() {
    //alert('Test')
    let deleteButton = $('#btnDelete');
    let towns = $('#towns option');
    let resultDiv = $('#result');
    let townNameBox = $('#townName');
    //console.log(towns);
    deleteButton.click(() => {
        let removed = false;
        towns.each((index, element) => {
            if (element.textContent === townNameBox.val()) { // if found delete the town
                $(element).remove();
                removed = true;   
            }
        });
        if (removed) {
            resultDiv.text(`${townNameBox.val()} deleted.`)
        } else {
            resultDiv.text(`${townNameBox.val()} not found.`)
        }
        // clear box after each click
        townNameBox.val('');
    });
}