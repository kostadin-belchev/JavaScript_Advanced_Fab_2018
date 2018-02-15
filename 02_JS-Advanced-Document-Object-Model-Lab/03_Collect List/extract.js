function extractText() {
    let listElements = document.querySelectorAll('#items li')
    for (const element of listElements) {
        let textToAdd = element.innerHTML;
        document.getElementById('result').textContent += textToAdd + '\n';
    }
}