function move(direction) { 
    //alert('test');
    let towns = $('#towns').find('option');
    //console.log(towns);
    
    if (direction > 0) { // move down
        towns.each((index, element) => {
            element = $(element);
            if (element.is(':selected')) {
                //console.log(element);
                element.insertAfter(element.next());
            }
        });
    } else { // move up
        towns.each((index, element) => {
            element = $(element);
            if (element.is(':selected')) {
                //console.log(element);
                element.insertBefore(element.prev());
            }
        });
    }
}