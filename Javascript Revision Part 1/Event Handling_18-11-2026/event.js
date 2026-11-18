
// event listeners 

let button = document.getElementById("clickBtn");
let output = document.getElementById("output");

button.addEventListener("click", function () {
    output.innerText = "Button Clicked!";
});

button.addEventListener("mouseover", function () {
    button.style.backgroundColor = "orange";
});

button.addEventListener("mouseout", function () {
    button.style.backgroundColor = "white";
});

// event bubbling and event capturing 

document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent Clicked - Bubbling");
});

document.getElementById("child").addEventListener("click", function () {
    console.log("Child Clicked");
});

//event deligation

document.getElementById("items").addEventListener("click", function (event) {

    if (event.target.tagName === "LI") {
        alert("Selected: " + event.target.textContent);
    }

});

// form handling and validation 

document.getElementById("registerForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    let result = document.getElementById("result");

    if (name === "" || email === "" || password === "") {
        result.innerText = "All fields are required";
        result.style.color = "red";
    }
    else if (password.length < 6) {
        result.innerText = "Password must contain at least 6 characters";
        result.style.color = "red";
    }
    else {
        result.innerText = "Registration Successful!";
        result.style.color = "green";
    }

});