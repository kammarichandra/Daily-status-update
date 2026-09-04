const title = document.getElementById("main-title");
console.log(title);

const tag = document.getElementsByTagName("p");
console.log(tag);

const class1 = document.getElementsByClassName("name");
console.log(class1);

// DOM manipulation
// changing HTML elements using JavaScript
const title1 = document.querySelector("#welcome-title");

title1.textContent = "Welcome to JavaScript";
console.log(title1);

// changing CSS

title1.style.color = "blue";
title1.style.fontSize = "40px";

// change the HTML

title1.innerHTML = "<span>Hello JavaScript!</span>";

// add / remove the classes
if (title) {
    title.classList.add("active");
    title.classList.remove("active");
    title.classList.toggle("active");
}

// creating elements dynamically

const list = document.querySelector("#skill-list");
const li = document.createElement("li");
li.textContent = "Learn JavaScript";

if (list) {
    list.appendChild(li);
} else {
    console.log("No list found to append item.");
}
// li.remove();

// event listners 
// Event listeners allow your website to respond to user actions.
// Click
// Input
// Submit
// Mouseover
// Keydown

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log("button clicked ")
});

let input = document.getElementById("input");

input.addEventListener("input", () => {
    console.log(input.value);
});

// problem

let title3 = document.getElementById("title3");

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    title.textContent = "welcome to atp "
        ;
})

// add items 

let itemInput = document.getElementById('itemInput');
let addBtn = document.getElementById("addBtn");
let list1 = document.getElementById("list1")

addBtn.addEventListener("click", () => {
    console.log(itemInput.value);
    document.createElement("li");
    li.textContent = "java";

})

// counter

let countDisplay = document.getElementById("count");
let inc = document.getElementById("+");
let dec = document.getElementById("-");
let reset = document.getElementById("reset");

let countValue = 0;

function updateCounter() {
    if (countDisplay) {
        countDisplay.textContent = `count : ${countValue}`;
    }
}

inc.addEventListener("click", () => {
    countValue++;
    updateCounter();
});

dec.addEventListener("click", () => {
    countValue--;
    updateCounter();
});

reset.addEventListener("click", () => {
    countValue = 0;
    updateCounter();
});

updateCounter();


function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskText = taskInput.value.trim();

    if (taskText === "") {
       alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");

    span.textContent = taskText;

    span.addEventListener("click", () => {

        span.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
   
    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
  
    taskInput.value = "";
  
}

title.innerHTML = "<h1>hello</h1>"