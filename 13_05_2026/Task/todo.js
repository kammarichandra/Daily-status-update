
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displaytask();

// add task function
function addtask(){
    let taskinput = document.getElementById("task");
    let newTask = taskinput.value.trim();

    if (!newTask) {
        alert("Please enter a task");
        return;
    }

    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskinput.value = "";
    displaytask();
}

function displaytask(){
    let list = document.getElementById("tasklist");
    list.innerHTML = "";

    tasks.forEach(function(item){
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
}
