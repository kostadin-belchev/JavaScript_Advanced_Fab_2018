function tableBuilder(selector) {
    let container = $(selector);

    function createTable(columnNames) {
        // The createTable(columnNames) function replaces the content in the target DOM element with a new HTML table
        container.empty();
        let table = $('<table>');
        let headerRow = $('<tr>');
        for (const element of columnNames) {
            let thToAdd = $('<th>').text(`${element}`);
            headerRow.append(thToAdd);
        }
        headerRow.append($('<th>').text('Action'));
        table.append(headerRow);
        //console.log(table);
        container.append(table);
    }

    function fillData(dataRows) {
            // The fillData(dataRows) function puts in the table inside the target DOM element table rows holding the provided dataRows (array of arrays of strings).
            // Add a [Delete] button in the last column. 
            // Clicking the [Delete] button should delete the entire table row.
            for (const dataRow of dataRows) {
                let tr = $('<tr>');
                for (const dataElement of dataRow) {
                    tr.append($('<td>').text(`${dataElement}`)); //ESCAPES SPECIAL CHARACTERS
                }
                let deleteButton = $('<button>').text("Delete").click(function () {
                    $(this).parent().parent().remove();
                });
                tr.append($('<td>').append(deleteButton));
                container.children().append(tr);
            }
    }

    return {
        createTable,
        fillData
    }
}
