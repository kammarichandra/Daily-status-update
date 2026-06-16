//button clicked

let button = document.getElementById("btn");

button.addEventListener("click",function(){
    console("button clicked");
});

let button1 = document.getElementById("btn");
let input = document.getElementById("input");
let box  = document.getElementById("box");
let output = document.getElementById("output");

//button event 

button1.addEventListener("click", function(){
    output.textContent = "button clicked";
});

//input event 

input.addEventListener("input",(event)=>{
    output.textContent = `your text : ${event.target.value}`;
});

//mouse event 


box.addEventListener("mouseenter",()=>{
    box.style.backgroundColor = "green";
    output.textContent = "mouse entered"
});

// mouse leave 

box.addEventListener("mouseleave",()=>{
    box.style.backgroundColor = "green";
    output.textContent = "user left  "
});

//mouse move 

box.addEventListener("mousemove",(event)=>{
    console.log(`a : ${event.offsetX} , b : ${event.offsetY}`)
});