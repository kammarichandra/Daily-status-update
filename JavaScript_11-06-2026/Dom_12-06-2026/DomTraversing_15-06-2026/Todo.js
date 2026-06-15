let taskinput = document.getElementById("taskinput");
let addbtn = document.getElementById("btn");
let tasklist = document.getElementById("tasklist");

//add task

function addtask(){
    let tasktext = taskinput.value.trim();

    if(tasktext === ""){
        alert("enter your task");
        return;
    }

    let li = document.createElement("li");

    //task text

    let span = document.createElement("span");
    span.textContent = tasktext;

    //toggle completed 

    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    })

    //delete button

    let deletebtn = document.createElement("button");

    deletebtn.textContent = "delete";
    deletebtn.classList.add("deletebtn");

    deletebtn.addEventListener("click",function(){
        li.remove();
    
    });

    li.appendChild(span);
    li.appendChild(deletebtn);
    tasklist.appendChild(li);

    taskinput.value = "";
}

addbtn.addEventListener("click",addtask);