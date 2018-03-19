function addProduct() {
    //alert('add button wordks');
    let allInputs = $( ":input" );
    let inputProduct = allInputs[0];
    //console.log(inputProduct);
    let inputPrice = allInputs[1];
    //console.log(inputPrice);
    let totalSum = $('tfoot>tr>td')[1];
    //console.log(totalSum);
    
    if ($(inputProduct).val() !== '' && $(inputPrice).val() !== '') {
        // Do nothing if either of text boxes is empty 
        let tableBody = $('#product-list');
        let newRow = $('<tr>');
        newRow.append($('<td>').text($(inputProduct).val()));
        newRow.append($('<td>').text($(inputPrice).val()));
        // Append the text received from the input boxes as a new row at the end of the table’s body
        newRow.appendTo(tableBody);
        //	Add the new product’s price to the total sum
        let newSum = Number($(totalSum).text()) + Number($(inputPrice).val());
        //console.log(newSum);
        $(totalSum).text(`${newSum}`);
        // Clear the input boxes after the product’s information is submitted 
        $(inputProduct).val('');
        $(inputPrice).val('');
    }
    

}