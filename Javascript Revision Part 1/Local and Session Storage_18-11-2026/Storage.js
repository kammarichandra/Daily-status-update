
// local storage 


let saveUser = () => {
    let name = document.getElementById("username").value;

    localStorage.setItem("username", name);

    alert("Username Saved");
}

let getUser = () => {
    let name = localStorage.getItem("username");

    document.getElementById("result").innerText =
        name ? "Welcome " + name : "No username found";
}

let removeUser = () => {
    localStorage.removeItem("username");

    alert("Username Removed");
}

// session storage 

let saveSession = () => {

    let name = document.getElementById("user").value;

    sessionStorage.setItem("user", name);

    alert("Session Saved");
}

let getSession = () => {

    let name = sessionStorage.getItem("user");

    document.getElementById("output").innerText =
        name ? "Hello " + name : "No session data found";
}

// browser events 

// Load Event

window.addEventListener("load", function () {
    document.getElementById("load").innerText = "Website Loaded Successfully";
});

// Resize Event

window.addEventListener("resize", function () {

    document.getElementById("resize").innerText = "Width: " + window.innerWidth + " Height: " + window.innerHeight;

});

// Keydown Event

document.addEventListener("keydown", function (event) {

    document.getElementById("keyboard").innerText = "You Pressed: " + event.key;

});
