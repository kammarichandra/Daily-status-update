let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.addEventListener("click",()=>{
    msg.textContent = "button clicked";
    console.log(msg);
})

let name1 = document.getElementById("name");
let output = document.getElementById("output")

name1.addEventListener("input",()=>{
    let a = output.textContent = name1.value ;
    console.log(a);
})

let course = document.getElementById("course");
let result = document.getElementById("result");

course.addEventListener("change",()=>{
   let res =  result.textContent = " selected : " + course.value ; 
   console.log(res);
})

let form = document.getElementById("loginForm");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let user = document.getElementById("username").value
    let password = document.getElementById("password").value

    console.log(user);
    console.log(password);
})

// Event Bubbling : 
// Event bubbling means the event starts from the target element and moves upward through its parent elements.

let child = document.getElementById("child");
let parent = document.getElementById("parent");

child.addEventListener("click",()=>{
    console.log("child clicked")
})

parent.addEventListener("click",()=>{
    console.log("parent button clicked");
});

// Event Capturing : 
// Event capturing is the opposite direction.
// The event travels from the outermost parent toward the target element.
// document
//    ↓
// html
//    ↓
// body
//    ↓
// div
//    ↓
// button

let child1 = document.getElementById("child1");
let parent1 = document.getElementById("parent1");

parent1.addEventListener("click",()=>{
    console.log("parent button clicked")
},true)

child1.addEventListener("click",()=>{
    console.log("child button clicked");
});

// event deligation 

let employeeList = document.getElementById("employeeList");

employeeList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete")) {

        event.target.parentElement.remove();

    }

});

// Debouncing
// Debouncing means:
// Execute the function only after the user stops performing an action for a specified amount of time.
// Very useful for:
// Search boxes
// API calls
// Form validation
// Auto-save

let search = document.getElementById("search");

search.addEventListener("input",()=>{
    // clearTimeout(timer);

    let timer = setTimeout(()=>{
        console.log(" searcing for : " + search.value);
    },1000)
    clearTimeout(timer);

})

// Throttling
// Throttling means:

// Execute a function at most once during a specified time interval.
// Useful for events that fire very frequently:
// scroll
// mousemove
// resize
// touchmove

let lastTime = 0;

window.addEventListener("scroll", function () {

    let currentTime = Date.now();

    if (currentTime - lastTime >= 1000) {

        console.log("Scroll event");

        lastTime = currentTime;
    }

});


