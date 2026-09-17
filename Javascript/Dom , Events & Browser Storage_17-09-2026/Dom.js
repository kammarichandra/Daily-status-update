// selecting elements 
// getElementById()
console.log("selecting elements : ")
let title = document.getElementById("title");
console.log(title);

// getElementByclassName();
let text = document.getElementsByClassName("text");
console.log(text);

//getElementByTagName()
let tag  = document.getElementsByTagName("div");
console.log(tag)

// querySelector()
let heading = document.querySelector("#title");

let paragraph = document.querySelector(".text");

console.log(heading);
console.log(paragraph);

//querySelectorAll()

let paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

console.log("Reading and Updating elements : ");
// reading and updating 

//textcontent 

let title1 = document.getElementById("title1");
let updated = title1.textContent = "welcome to atp"
console.log(updated);

// innerhtml

let container = document.getElementById("container1");
container.innerHTML = "<h1>upadted by innerhtml</h1>";
console.log(container);

// input value 

let input = document.getElementById("username");

console.log(input.value);
input.value = "rahul";

// style
title1.style.color = "red";
title.style.color = "blue";

// creating elements dynamically

console.log("creating elements dynamically : ")

let paragraph1 = document.createElement("p");
paragraph1.textContent = "this was created by using js";
document.body.appendChild(paragraph1);
console.log(paragraph1);

let button = document.createElement("button");
button.textContent = "click me";

document.body.appendChild(button);
console.log(button)

// adding elements

let li = document.createElement("li");
li.textContent = "javascript"

document.body.appendChild(li);

console.log(li);

let p = document.createElement("p");
p.textContent = "welcomw to atp";
document.body.append(p);
console.log(p)

// removing elements 

li.remove();

let list = document.getElementById("list");

let item = list.firstElementChild;

list.removeChild(item);


// DOM Traversing
// DOM traversal means moving between parent, child, and sibling elements.
console.log("Dom Transversing : ");

let list1 = document.getElementById("list");
console.log(list1.parentElement);
console.log(list1.children);
console.log(list1.firstElementChild);
console.log(list1.lastElementChild);
console.log(list1.nextElementSibling);
console.log(list1.previousElementSibling);


let input1 = document.getElementById("skillInput");
let addBtn = document.getElementById("addBtn");
let skillList = document.getElementById("skillList");

addBtn.addEventListener("click", function () {

    let skill = input1.value.trim();

    if (skill === "") {
        alert("Please enter a skill");
        return;
    }

    let li = document.createElement("li");

    li.textContent = skill;

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.append(" ");
    li.appendChild(deleteBtn);

    skillList.appendChild(li);

    input1.value = "";
});

let title = document.createElement("p")

title.textContent = "welcome to js ";
console.log(title);