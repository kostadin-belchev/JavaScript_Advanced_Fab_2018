//Created by *** Kostadin Belchev ***
function search() {
    let searchPattern = $('#searchText');
    let matches = 0;
    $('#towns li').each((index, element) => {
        if (element.textContent.includes(searchPattern.val())) {
            $(element).css('font-weight', 'bold');
            matches++;
        } else {
            $(element).css('font-weight', '');
        }
    });
    $('#result').text(`${matches} matches found.`);
    // let searchPattern = $('#searchText');
    // $('#towns li').css('font-weight', '');
    // let matchedItems = $(`#towns li:contains(${searchPattern.val()})`).css('font-weight', 'bold');
    // $('#result').text(`${matchedItems.length} matches found.`);
}
