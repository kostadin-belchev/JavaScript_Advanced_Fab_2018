function colorize() {
    let trTags = document.getElementsByTagName('tr');
    //console.log(trTags);
    for (let i = 1; i < trTags.length; i+=2) {
        let element = trTags[i];
        element.style.background = 'Teal';
    }
}