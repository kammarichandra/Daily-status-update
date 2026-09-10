// Event Listeners
// An event listener waits for an event such as a click, typing, mouse movement, or keyboard press.
// syntax : 
// addEventListner("click",()=>{
// console.log()    
// })
//  common events : 
// "dblclick"
// "mouseover"
// "mouseout"
// "keydown"
// "keyup"
// "input"
// "change"

// const { createElement } = require("react");

// "submit"
let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    console.log("button clicked")
})

btn.addEventListener("mouseover",()=>{
    console.log("mouse is over button clicked")
})

// normal events
// These are the common events we use to interact with a webpage.

// keyboard event 

const input = document.querySelector("#input");

  input.addEventListener("keydown", (event) => {
    console.log("Key:", event.key);
  });

  // event bubbling 
  // Event bubbling means an event starts at the element that was clicked and
  // then moves up through its parents.

  let parent = document.querySelector("#parent");
  let child = document.querySelector("#child");

  child.addEventListener("click",()=>{
    console.log(" child : button clicked");
  })

  parent.addEventListener("click",()=>{
    console.log(" parent : div clicked")
  });

// event capturing 
// Event capturing is the opposite direction of bubbling.

parent.addEventListener("click", () => {
  console.log("Parent");
}, true);

child.addEventListener("click", () => {
  console.log("Child");
}, true);

// event delegation 
// Event delegation means putting one event listener on a parent instead of adding listeners to every child.

const list = document.getElementById("list");

  list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      console.log("Clicked:", event.target.textContent);
    }
  });

// Throttling
// Throttling controls how frequently a function can execute.
// For example, scroll and mousemove can fire many times per second.

window.addEventListener("scroll",()=>{
    console.log("scrolling")
});


function handleScroll() {
  console.log("Scrolling...");
}

let lastTime = 0;

window.addEventListener("scroll", () => {
  const now = Date.now();

  if (now - lastTime >= 500) {
    handleScroll();
    lastTime = now;
  }
});

// Debouncing
// Debouncing waits until the event stops happening for a certain amount of time before running the function.

 const search = document.querySelector("#search");

search.addEventListener("input", () => {
  setTimeout(() => {
    console.log("Searching...");
  }, 500);
});



let btn1 = document.getElementById("btn");

btn1.addEventListener("click", () => {

    let ele = document.createElement("p");

    ele.textContent = "text changed";

    document.body.appendChild(ele);
});


