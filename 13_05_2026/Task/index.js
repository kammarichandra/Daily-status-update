
let app = document.getElementById("app");

function checkauth(){
    let token = localStorage.getItem("authtocken");

    if(token){
        showHomePage();
    } else {
        showLoginForm();
    }
}

// login form
function showLoginForm(){
    app.innerHTML = `
        <h2>Login form</h2>
        <input type="text" placeholder="enter username" id="username">
        <input type="password" placeholder="enter password" id="password">
        <button id="loginbtn">Login</button>
    `;

    let loginbtn = document.getElementById("loginbtn");
    loginbtn.addEventListener("click", loginuser);
}

// login function
function loginuser(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === ""){
        alert("please fill the details");
        return;
    }

    let validUsername = "admin";
    let validPassword = "1234";

    if(username !== validUsername || password !== validPassword){
        alert("User not found");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("authtocken", "true");
    showHomePage();
}

// home page
function showHomePage(){
    let user = localStorage.getItem("username") || "Guest";
    app.innerHTML = `
        <h1>Hello ${user}</h1>
        <p>Login successful</p>
        <button id="logoutbtn">Logout</button>
    `;

    let logoutbtn = document.getElementById("logoutbtn");
    logoutbtn.addEventListener("click", logoutuser);
}

// logout function
function logoutuser(){
    localStorage.removeItem("authtocken");
    localStorage.removeItem("username");
    showLoginForm();
}

checkauth();