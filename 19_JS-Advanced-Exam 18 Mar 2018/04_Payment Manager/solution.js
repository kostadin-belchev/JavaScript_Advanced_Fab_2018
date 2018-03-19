class PaymentManager {
    constructor(title) {
        this.title = title;
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
    // Function render(id) – takes one (string) argument,
    // generates the table’s HTML element and appends it to the element in the DOM 
    // with ID equal to the argument
    render(id) {
        //  generates the table’s HTML element
        //let table = $('<div>').text('Test DIV'); // works
        let table = $('<table>');
        let caption = $('<caption>').text(`${this.title} Payment Manager`);
        let trHead = $('<tr>').html(`
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>`)
        let thead = $('<thead>').append(trHead);
        let tbody = $('<tbody>').addClass('payments');
        let tfoot = $('<tfoot>').addClass('input-data');
        let trFoot = $('<tr>');
        tfoot.append(trFoot);


        trFoot.append(`<td><input name="name" type="text"></td>`);
        trFoot.append(`<td><input name="category" type="text"></td>`);
        trFoot.append(`<td><input name="price" type="number"></td>`);
        let addButton = $(`<button>`).text('Add').click((e) => {
            // console.log(this);
            //console.log(e.target);
            let nameInputElement = $(e.target).parent().parent().find("input[name='name']");
            let categoryInputElement = $(e.target).parent().parent().find("input[name='category']");
            let priceInputElement = $(e.target).parent().parent().find("input[name='price']");
            // console.log(nameInputElement);
            // console.log(categoryInputElement);
            
            if (nameInputElement.val() !== '' && categoryInputElement.val() !== '' && priceInputElement.val() !== '') {
                let row = $('<tr>');
                row.html(`
                <td>${nameInputElement.val()}</td>
                <td>${categoryInputElement.val()}</td>
                <td>${Number(priceInputElement.val())}</td>
                `);
                let deleteButton = $('<button>').text('Delete').click((e)=>{
                    // Should remove the table’s row, where it is placed on
                    // Note that, every button’s functionality should work only for the table where it is located on.
                    //console.log(e.target);
                    $(e.target).parent().remove();
                });
                row.append(deleteButton)
                tbody.append(row);
                nameInputElement.val('');
                categoryInputElement.val('');
                priceInputElement.val('');
            }
            
        });

        trFoot.append($('<td>').append(addButton));
        table.append(caption);
        table.append(thead);
        table.append(tbody);

        table.append(tfoot);
        //appends it to the element in the DOM 
        // with ID equal to the argument
        $(`#${id}`).append(table);
    }
}