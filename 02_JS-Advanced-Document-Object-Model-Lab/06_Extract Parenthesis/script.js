function extract(targetID = '') {
    let text = document.getElementById(targetID).textContent;
    const regex = /\((.*?)\)/g;
    const str = text;
    let m;
    let result = [];
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            result.push(match);
        });
    }

    return result.join('; ');
}