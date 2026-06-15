let button = document.getElementById("btn");

// parent element
let parent = button.parentElement;
console.log("Parent:", parent);

// grandparent element
let grandParent = parent.parentElement;
console.log("Grandparent:", grandParent);

// children of  button 
console.log("Button children:", button.children);

// children of the parent container
console.log("Parent children:", parent.children);
console.log("Parent first child:", parent.firstElementChild);
console.log("Parent last child:", parent.lastElementChild);

// sibling of the parent container
let Container = document.getElementById("container1");
console.log("Parent container:", Container);

// creating a dom element 

let heading = document.createElement("h1");

heading.textContent = "welcome to javascript";

document.getElementById("container").appendChild(heading);

// create a para 

let para = document.createElement("p");

para.textContent = "hi chandra welcone to nyb";

document.getElementById("container").appendChild(para);


// create and add attributes to an image element

let image = document.createElement("img");

image.src = "https://93mobiles.com/wp-content/uploads/2026/03/610Sug7kIML._SL1500_-2.jpg" ;
image.alt = "placeholder";


document.body.appendChild(image);


//create multiple elements 

let fruits = ["apple","banana","orange","mango"];

let ul = document.createElement("ul");

fruits.forEach(fruit =>{
    let li = document.createElement("li");
    li.textContent = fruit;
    ul.appendChild(li);
});
console.log(document.body.appendChild(ul))


// creating a card component

let card = document.createElement("div");

card.classList.add("card");

let title = document.createElement("h2");
title.textContent = "heloo nyb";

let discreption = document.createElement("p");

discreption.textContent = "hi chandra sekhar nyb is invitinig you to viste office";

card.appendChild(title);
card.appendChild(discreption);

document.body.appendChild(card);


// adding event listners 

let button1 = document.createElement("button");
button1.textContent = "click";

button1.addEventListener("click",function(){
    alert("button clicked ");
    console.log("button clicked");

});
document.body.appendChild(button1);
