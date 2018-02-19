function extractText() {
    let result = [];
    let items = $('#items li').each((index, element) => result.push(element.textContent));
    $('#result').text(result.join(', '));
    //alert($('#result').text())
}
