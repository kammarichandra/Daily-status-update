
//local storage 

function saveData(){
    let name = document.getElementById("username").value;

    localStorage.setItem("username",name);
    alert("data saved")
}

// gettting data 

function getData(){
    let data = localStorage.getItem("username");
    let result  = document.getElementById("result").innerText = data;
}

// remove data 

function removeData(){
   localStorage.removeItem("username");
   document.getElementById("result").innerText = "";
   alert("data removed");
}

// clear all data

function cleardata(){
   localStorage.removeItem("username");
   document.getElementById("result").innerText = "";
   document.getElementById("username").value = "";
   alert("all data cleared");
}

// // clear all 
// function cleardata(){
//     let clear = localStorage.clear();
//     alert("all clear")
// }

// storing obj

function storeObject(){
    let username = document.getElementById("usernameObj").value;
    let age = document.getElementById("age").value;
    let role = document.getElementById("role").value;

    let user = { username, age, role };
    localStorage.setItem("user", JSON.stringify(user));
    alert("object stored");
}

// session store

function saveSession(){
    let username = document.getElementById("usernameSession").value;
    let email = document.getElementById("emailSession").value;
    let age = document.getElementById("ageSession").value;
    let role = document.getElementById("roleSession").value;

    sessionStorage.setItem("username", username);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("age", age);
    sessionStorage.setItem("role", role);

    alert("session saved");
}

function getSession(){
    let username = sessionStorage.getItem("username");
    let email = sessionStorage.getItem("email");
    let age = sessionStorage.getItem("age") ;
    let role = sessionStorage.getItem("role") ;

    document.getElementById("show").innerText =
        `Name: ${username}\nEmail: ${email}\nAge: ${age}\nRole: ${role}`;
}
