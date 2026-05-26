 // Name Validation
        function validateForm() {
            let name = document.getElementById("name").value.trim();

            if (name === "") {
                alert("Name is required");
                return false;
            }

            alert("Name submitted successfully");
            return true;
        }

        // Age Validation
        function validateAge() {
            let age = document.getElementById("age").value;

            if (age < 18) {
                alert("Your age must be 18 or above");
                return false;
            }

            alert("Age submitted successfully");
            return true;
        }

        // Password Validation
        function validatePassword() {
            let password = document.getElementById("password").value;

            if (password.length < 8) {
                alert("Password should be minimum 8 characters");
                return false;
            }

            alert("Password submitted successfully");
            return true;
        }