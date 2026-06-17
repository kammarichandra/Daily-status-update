

let entertask = document.getElementById("enter-task");
let addtask = document.getElementById("addTask");
let list = document.getElementById("list");

addtask.addEventListener("click", () => {

    let text = entertask.value.trim();

    if (text) {
        let li = document.createElement("li");
        li.innerHTML = `${text} <button class="delete-btn">Delete</button>`;

        list.appendChild(li);
        entertask.value = "";
    }

});

// event delegation
list.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});


let users = document.getElementById("users");

users.addEventListener("click",(event)=>{

    if(event.target.classList.contains("edit")){
        console.log("edit user");
    }

    if(event.target.classList.contains("delete")){
        console.log("delete user")
    }
});