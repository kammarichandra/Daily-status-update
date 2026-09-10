// dom 
// DOM (Document Object Model) represents an HTML page as a tree of objects. 
// JavaScript uses the DOM to read, change, add, or remove HTML elements.

let title = document.getElementById("title");
console.log(title);

// Selecting DOM Elements
// JavaScript provides several methods to select HTML elements.

// // Select by ID
// const title1 = document.getElementById("title");

// // Select first matching element
// const heading = document.querySelector("h1");

// // Select all matching elements
// const paragraphs = document.querySelectorAll("p");

// // Select by class
// const items = document.getElementsByClassName("item");

// // Select by tag
// const divs = document.getElementsByTagName("div");

let title2 = document.getElementById("title1");
console.log(title2)
let selector = document.querySelector(".text");
console.log(selector)
let selectall = document.querySelectorAll(".text");
console.log(selectall);

// Reading and Modifying DOM Properties
// You can read or change the text, HTML, styles, attributes, and values of elements.
// Important properties : 
// element.textContent
// element.innerHTML
// element.style
// element.value
// element.src
// element.href

let old = document.getElementById("old");
let input = document.getElementById("name");
let button = document.getElementById("btn");

button.addEventListener("click",function(){
    console.log(input.value);

    // Modify text
    old.textContent = "welcome to atp";

    // Modify style
    old.style.color = "blue";
    old.style.backgroundColor = "yellow";

})

//DOM Traversing
// DOM traversal means moving from one element to another, such as :
// Parent
// Child
// First child
// Last child
// Next sibling
// Previous sibling

// Important properties : 

// element.parentElement
// element.children
// element.firstElementChild
// element.lastElementChild
// element.nextElementSibling
// element.previousElementSibling

let para = document.getElementById("para");

//parent
console.log("parent element : ",para.parentElement);

// child 
console.log("children of parent : ",para.parentElement.children);

//previos siblling

console.log("previous siblling : ",para.parentElement.previousElementSibling);

// next siblling

console.log("next siblling : ",para.nextElementSibling);

// Creating Elements Dynamically
// You can create new HTML elements using JavaScript.

let element = document.createElement("p");
element.textContent = "hello chandra sekhar "
document.body.append(element);

let btn = document.getElementById("btn1");
let container = document.getElementById("container");

btn.addEventListener("click",()=>{
    let para = document.createElement("p");

    para.textContent = "new paragraph"
    para.style.color = "green";

    container.appendChild(para);
})

// Adding and Removing Elements
// You can add elements using:
// appendChild()
// append()
// prepend()
// You can remove elements using:
// remove()
// removeChild()

let container1 = document.getElementById("container1");
let para1 = document.getElementById("para1");
let add = document.getElementById("add");
let remove = document.getElementById("remove");

// add element
add.addEventListener("click", () => {
    let newpara = document.createElement("p");
    newpara.textContent = "new para added";
    container1.appendChild(newpara);
});

// remove
remove.addEventListener("click", () => {
    if (para1) {
        para1.remove();
    }
});