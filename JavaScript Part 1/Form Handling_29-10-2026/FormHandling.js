const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const phoneInput = document.getElementById("phone");

const submitBtn = document.getElementById("submitBtn");
const preview = document.getElementById("preview");
const output = document.getElementById("output");
const roleSelect = document.getElementById("role");
const extraField = document.getElementById("extraField");


// TASK 9: Basic Form Handling

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateForm()) {
        return;
    }

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const phone = phoneInput.value;

    output.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${"*".repeat(password.length)}</p>
        <p>Phone: ${phone}</p>
        <p>Role: ${roleSelect.value}</p>
        <p class="success">Registration Successful!</p>
    `;
});


// TASK 10: Form Validation

function validateForm() {
    let isValid = true;

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");
    const phoneError = document.getElementById("phoneError");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    phoneError.textContent = "";

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = "Enter a valid 10-digit phone number";
        isValid = false;
    }

    return isValid;
}


// Remove error messages when inputs change

form.addEventListener("input", function () {
    validateForm();
    submitBtn.disabled = !validateForm();
});


// TASK 11: Dynamic Form

roleSelect.addEventListener("change", function () {
    if (roleSelect.value === "Student") {
        extraField.innerHTML = `
            <input type="text" id="extraInput"
                   placeholder="Enter College Name">
        `;
    } else if (roleSelect.value === "Employee") {
        extraField.innerHTML = `
            <input type="text" id="extraInput"
                   placeholder="Enter Company Name">
        `;
    } else {
        extraField.innerHTML = "";
    }

    updatePreview();
});


// Live Form Preview

form.addEventListener("input", updatePreview);

function updatePreview() {
    preview.innerHTML = `
        <p>Name: ${nameInput.value}</p>
        <p>Email: ${emailInput.value}</p>
        <p>Phone: ${phoneInput.value}</p>
        <p>Role: ${roleSelect.value}</p>
    `;
}


// Reset Form

form.addEventListener("reset", function () {
    submitBtn.disabled = true;
    extraField.innerHTML = "";
    preview.innerHTML = "";
    output.innerHTML = "";
});


// Delete Submitted Data

function deleteData() {
    const confirmDelete = confirm("Do you want to delete the submitted data?");

    if (confirmDelete) {
        output.innerHTML = "";
    }
}