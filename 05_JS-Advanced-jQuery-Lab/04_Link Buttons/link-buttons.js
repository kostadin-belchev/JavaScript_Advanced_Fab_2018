function attachEvents() {
    // You are given HTML holding some buttons. 
    // Implement the attachEvents function which should attach click events on the 
    // buttons. When a button is clicked it should remove the class="selected" 
    // attribute from the button that currently holds it and add it to its own 
    // attributes.
    let buttons = $('a.button').on('click', onClick);
    // buttons.each((index, element) => {
    //     //$(element).attr('id', index);
    //     $(element).click(onClick);
    // });

    function onClick() {
        let button = $(this); // "this" is the event source (the hyperlink clicked)
        //let currentlyPressedButtonID = button.attr('id');
        //console.log(currentlyPressedButtonID);
        $('.selected').removeClass('selected');
        button.addClass('selected');
    }
}
