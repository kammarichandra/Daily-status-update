// BOM (Browser Object Model)
// BOM allows JavaScript to interact with the browser window, rather than the HTML document.
// the main bom is window 
// window
//  ├── location
//  ├── history
//  ├── navigator
//  ├── screen
//  └── localStorage

// Common BOM properties/methods
// window.innerWidth
// window.innerHeight

// window.alert()
// window.prompt()

// window.open()
// window.close()

// window.setTimeout()
// window.setInterval()

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log("Width:", window.innerWidth);
    console.log("Height:", window.innerHeight);
    console.log("URL:", window.location.href);
    console.log("Browser:", navigator.userAgent);
});

// output methods 
// JavaScript provides several ways to display output.

console.log("hello javascript")
console.log(10 + 20);

// alert 
// display the pop up msg

alert("Welcome!");

// document.write()
// Writes directly to the webpage.

// document.write("Hello World");

// text content 

const output = document.querySelector("#output");

output.textContent = "Hello JavaScript!";

output.innerHTML = "<strong>Hello!</strong>";

// local storage 
// local Storage allows you to save data in the browser.

// The important thing is:
// Data remains even after you close and reopen the browser.

// It stores data as key-value pairs, and values are stored as strings.

let nameInput = document.getElementById("name");
let outputs = document.getElementById("output1");
let save = document.getElementById("save");
let show = document.getElementById("show");
let remove = document.getElementById("remove");

// save
save.addEventListener("click", () => {
    let username = nameInput.value.trim();

    if (username) {
        localStorage.setItem("username", username);
        outputs.textContent = "Saved: " + username;
    } else {
        outputs.textContent = "Please enter a name";
    }
});

// show
show.addEventListener("click", () => {
    let username = localStorage.getItem("username");
    outputs.textContent = username ? username : "No name found";
});

// remove
remove.addEventListener("click", () => {
    localStorage.removeItem("username");
    outputs.textContent = "Name removed";
});

// Session Storage
// Session Storage is similar to Local Storage, but the data is associated with the current browser tab/session.

sessionStorage.setItem("name", "Rahul");

const name = sessionStorage.getItem("name");

console.log(name);

sessionStorage.removeItem("name");


const input = document.querySelector("#username1");
const output2 = document.querySelector("#output2");

document.querySelector("#save1").addEventListener("click", () => {

    sessionStorage.setItem("username", input.value);

    output2.textContent = "Saved for this session!";
});


document.querySelector("#show1").addEventListener("click", () => {

    const username = sessionStorage.getItem("username");

    output2.textContent = username || "No username found";
});

