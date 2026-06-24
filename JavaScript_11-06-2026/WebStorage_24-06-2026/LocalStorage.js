
let nameInput = document.getElementById("name");
let save = document.getElementById("save");
let show = document.getElementById("show");

save.addEventListener("click", function() {
    localStorage.setItem("name", nameInput.value);


});

show.addEventListener("click", () => {
    const saved = localStorage.getItem("name");
    alert("saved name : " + saved);
});


localStorage.setItem("username","chandra");


// retrive data

let username = localStorage.getItem("username");

console.log(username);

//remove data

localStorage.removeItem("username");

//clear all

// localStorage.clear(); // keep saved auth and other data while testing



// student information 

let studentId = document.getElementById("id");
let studentName = document.getElementById("name");
let save1 = document.getElementById("btn");
let  show1 = document.getElementById("btn1");

save1.addEventListener("click", function() {
    let student = {
        id: studentId.value,
        name: studentName.value
    };

    localStorage.setItem("student", JSON.stringify(student));
    alert("details saved");
});

show1.addEventListener("click", () => {
    let student = JSON.parse(localStorage.getItem("student"));
    if (student) {
        alert("ID: " + student.id + "\nName: " + student.name);
    } else {
        alert("No student data found.");
    }
});


function render(){

    let tocken = localStorage.getItem("authtocken");

    let app = document.getElementById("app");

    if(tocken){
        app.innerHTML = `
        <h2>Hello User</h2>
            <button onclick="logout()">Logout</button>
        `;
    }else{
        app.innerHTML =`
        <h2>Please Login</h2>
            <button onclick="login()">Login</button>
        `;
    }
}

function login(){

    localStorage.setItem("authtocken","abc123");

    render();
}

function logout(){
    localStorage.removeItem("authtocken");
    render();
}

window.onload = render;

