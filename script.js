document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const numberInput = document.getElementById('number');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signupButton = document.getElementById('signupButton');

    function validateForm() {
        if (usernameInput.value && numberInput.value && emailInput.value && passwordInput.value) {
            signupButton.disabled = false;
        } else {
            signupButton.disabled = true;
        }
    }

    usernameInput.addEventListener('input', validateForm);
    numberInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
});