// input validation 

function validateinput() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("enter your name ")
        return false;
    }
    alert("form submited successfully");

    return true;
}

// name validation

function validatename() {
    let username = document.getElementById("username").value;

    if (username.length < 3) {
        alert("name must contain min 3 characters")
        return false;
    }
    alert("valid input");
    return true;
}


// Age Validation
function validateAge() {
    let age = document.getElementById("age").value;

    if (age < 18) {
        alert("Your age must be 18 or above");
        return false;
    }

    alert("eligble");
    return true;
}