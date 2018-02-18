function focus() {
    let inputElements = document.getElementsByTagName('input');
    //console.dir(inputElements);

    Array.from(inputElements).forEach(element => {
        element.addEventListener('focus', focusHandler);
        element.addEventListener('blur', blurHandler);
    });

    function focusHandler(event) {
        event.target.parentNode.className = 'focused';
    }

    function blurHandler(event) {
        event.target.parentNode.removeAttribute('class');
    }
}

// let inputs = document.getElementsByTagName('input');
    // Array.from(inputs).forEach(i => {
    //     i.addEventListener('focus', (event) => {
    //     event.target.parentNode.className = 'focused';
    //     });
    //     i.addEventListener('blur', (event) => {
    //     event.target.parentNode.removeAttribute('class');
    //     });
    // });