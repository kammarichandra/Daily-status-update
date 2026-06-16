
let btn = document.getElementById("btn");
let parent1 = document.getElementById("parent");

let parent = btn.parentElement;

console.log(parent);

//grand parent 

let grandparent = btn.parentElement.parentElement;

console.log(grandparent);

//children 

let child = parent1.children;

console.log(child);

//first child element 

let first = parent1.firstElementChild;

console.log(first);

//last child

let last  = parent1.lastElementChild;

console.log(last);

//sibling 

let sibling = parent1.sibling

console.log(sibling);

// creating element 

let heading = document.createElement("h1");

heading.textContent = "welcome to nyb";

document.getElementById("parent").appendChild(heading);

//para

let para = document.createElement("p")
para.textContent = "greetings from nyb";

let para1 = document.getElementById("parent").appendChild(para);

