document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Clear previous error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.style.display = 'none');

        // Validate each input
        let isValid = true;

        // Name validation
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameError.style.display = 'block';
            isValid = false;
        }

        // Email validation
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
            isValid = false;
        }

        // Password validation
        const passwordInput = document.getElementById('password');
        const passwordError = document.getElementById('password-error');
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            passwordError.style.display = 'block';
            isValid = false;
        }

        // Age validation
        const ageInput = document.getElementById('age');
        const ageError = document.getElementById('age-error');
        if (ageInput.value < 18 || ageInput.value > 99) {
            ageError.textContent = 'Age must be between 18 and 99.';
            ageError.style.display = 'block';
            isValid = false;
        }

        // Gender validation
        const genderInput = document.getElementById('gender');
        const genderError = document.getElementById('gender-error');
        if (genderInput.value === '') {
            genderError.textContent = 'Please select your gender.';
            genderError.style.display = 'block';
            isValid = false;
        }

        // Terms and conditions validation
        const termsInput = document.getElementById('terms');
        const termsError = document.getElementById('terms-error');
        if (!termsInput.checked) {
            termsError.textContent = 'You must agree to the terms and conditions.';
            termsError.style.display = 'block';
            isValid = false;
        }

        // If the form is valid, submit it
        if (isValid) {
            alert('Form submitted successfully!');
            form.submit();
        }
    });
});
