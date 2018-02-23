function validate() {

    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let submitBtn = $('#submit');
    let companyCheckbox = $('#company')
    let companyNumber = $('#companyNumber');
    let compayInfo = $('#companyInfo');
    let validDiv = $('#valid');

    submitBtn.click((event) => {
        event.preventDefault();
        validateForm();
    })
    companyCheckbox.change(() => {
       
        if (companyCheckbox.is(':checked')) {
            compayInfo.css('display', 'block');
        } else {
            compayInfo.css('display', 'none');
        }
    })
    function validateForm() {
        const regexUserName = /^[0-9A-Za-z]{3,20}$/;
        const regexEmail = /^.*?@.*\..*$/;
        const regexPassword = /^\w{5,15}$/;

        validateInput(regexUserName, username);
        validateInput(regexEmail, email);
        validateInput(regexPassword, password);
        validateInput(regexPassword, confirmPass);

        if (password.val() != confirmPass.val()) {
            password.css('border', '2px solid red');
            confirmPass.css('border', '2px solid red');
        }
        if (companyCheckbox.is(':checked')) {
            const regexCompanyNumber = /^[0-9]{4}$/;
            validateInput(regexCompanyNumber, companyNumber);
        }
        let allInputs = $('input');
        let isValid = true;
        allInputs.each((index, input) => {

            if ($(input).attr("style")) {
                isValid = false;
            }
        });

        if (isValid) {
            validDiv.css('display', 'block');
        }
    }
    function validateInput(regexPattern, input) {
        if (!regexPattern.test(input.val())) {
            input.css('border', '2px solid red');
        }
    }
}