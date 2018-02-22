function validate() {
    // TODO
    let submitButton = $('#submit');
    submitButton.on('click', submitHandler);
    
    let companyInformation = $('#companyInfo');
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('confirm-password');
    let checkBox = $('#company');
    checkBox.on('change', checkBoxHandler);
    let companyNumber = $('#companyNumber');
   

    function checkBoxHandler() {
        if (checkBox.is(":checked")) {
            companyInformation.css('display', 'block');
        } else {
            companyInformation.css('display', 'none');
        }
    }

    function submitHandler(ev) {
        // alert('Submit clicked, page should not reload');
        ev.preventDefault();
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/g;
        let emailRegex = /@.*\./g;
        let passwordRegex = /^(\w){5,15}$/g;
        // let usernameIsValid = 
        isValid(usernameRegex, username);
        let emailIsValid = isValid(emailRegex, email);
        let passwordIsValid = isValid(passwordRegex, password);
        let confirmPasswordIsValid= isValid(passwordRegex, confirmPassword);
        
        if (password.val() != confirmPassword.val()) {
            confirmPassword.css('border-color', 'red')
        }

        function isValid(regex, field) {
            console.log(`testing ${field.attr('id')} field`);
            if (!regex.test(field.val())) {
                //field.css('border', 'block');
                field.css('border-color', 'red'); // 'border', '2px solid red'
                //return false; 
            }  else {
                field.css('border', 'none'); // SEE TO IMPROVE STYLE
                //return true;
            }
            
        }
    }
}
