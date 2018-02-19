//Created by *** Kostadin Belchev ***
function search() {
    let searchPattern = $('#searchText');
    $('#items>li').each((index, element) => {
        if (element.textContent.includes(searchPattern.val())) {

        }
    });
    // $('#towns li').css('font-weight', '');
    // let matchedItems = $(`#towns li:contains(${searchPattern.val()})`).css('font-weight', 'bold');
    // $('#result').text(`${matchedItems.length} matches found.`);
}
