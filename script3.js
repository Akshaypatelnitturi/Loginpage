document.getElementById('signupForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const passwordError = document.getElementById('passwordError');
    
    let isValid = true;
    let errorMessages = [];

    // Clear previous error messages
    passwordError.innerHTML = '';
    confirmPasswordError.style.display = 'none';

    // Check password criteria
    if (password.length < 8) {
        errorMessages.push('At least 8 characters.');
        isValid = false;
    }
    if (!/[A-Z]/.test(password)) {
        errorMessages.push('At least one uppercase letter.');
        isValid = false;
    }
    if (!/[a-z]/.test(password)) {
        errorMessages.push('At least one lowercase letter.');
        isValid = false;
    }
    if (!/\d/.test(password)) {
        errorMessages.push('At least one digit.');
        isValid = false;
    }
    if (!/[\W_]/.test(password)) {
        errorMessages.push('At least one special character.');
        isValid = false;
    }

    // Display error messages if password criteria are not met
    if (!isValid) {
        passwordError.innerHTML = 'Password must meet the following criteria:<br>' + errorMessages.join('<br>');
        passwordError.style.display = 'block';
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});
