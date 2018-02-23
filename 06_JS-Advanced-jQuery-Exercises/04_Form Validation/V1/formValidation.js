function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyInfoFieldset = $('#companyInfo');
    let companyNumber = $('#companyNumber');
    let submitButton = $('#submit');
    let validDiv = $('#valid');
 
    companyCheckbox.on('change', function(){
        // If the "Is company?" checkbox is checked, the CompanyInfo fieldset should become visible
        // and the Company Number field must also be validated,
        if ($(this).is(':checked')) {
            companyInfoFieldset.css('display', '');
         // if it isn’t checked the Company fieldset should have the style "display: none;"
         // and the value of the Company Number field shouldn’t matter. 
        } else {
         companyInfoFieldset.css('display', 'none')
        }
    });
 
    submitButton.click(function(ev){
        // •	All buttons within a <form> automatically work as submit buttons,
        // unless their type is manually assigned to something else,
        // in order to avoid reloading the page upon clicking the [Submit]
        // button you can add the following code in the function that handles the on click event:
     ev.preventDefault();
     let usernameRegex = /^[a-zA-Z0-9]{3,20}$/g;
     let emailRegex = /@.*\./g;
     const passwordRegex = /^(\w){5,15}$/g;
     //console.log('Submit clicked, no reload should happen');
     isValid(usernameRegex, username);
     isValid(emailRegex, email);
     isValid(passwordRegex, password);
     //isValid(passwordRegex, confirmPassword);
 
     if (companyCheckbox.is(':checked')) {
         const companyNumberRegex = /^[1-9]+[0-9]{3}$/g;
         isValid(companyNumberRegex, companyNumber);
     }
 
     if (password.val() != confirmPassword.val()) {
         password.css('border-color', 'red');
         confirmPassword.css('border-color', 'red');
     }
 
     function isValid(regex, elementToCheck) {
         if (!regex.test(elementToCheck.val())) {
             elementToCheck.css('border-color', 'red')
         } //else
             //elementToCheck.css('border', 'none'); // better looking would be '' instead of 'none', in my opinion
     }
 
     // by default it should stay hidden
     validDiv.css('display', 'none');
     // if all is valid show it
     let allInputs = $('input');
     let thereIsStyle = false;
     allInputs.each((index, element)=>{ // element is an HTML element, not a jQuery one
         if ($(element).attr('style')) {
             thereIsStyle = true;
         }
     })
 
     if (!thereIsStyle) {
         validDiv.css('display', '')
     }
 
    });
 }