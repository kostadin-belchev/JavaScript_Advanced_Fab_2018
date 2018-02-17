function deleteByEmail() {
    let tableRows = document.getElementsByTagName('tr');
    let emailToBeChecked = document.getElementsByName('email')[0].value;
    for (let row = 1; row < tableRows.length; row++) {
        let currEmail = tableRows[row].children[1].textContent;
        console.log(`${currEmail} -> ${emailToBeChecked}`);
        if (currEmail === emailToBeChecked) { // delete the email
            tableRows[row].parentNode.removeChild(tableRows[row]);
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }
    // otherwise print error that email is not found
    document.getElementById('result').textContent = "Not found.";
}