// event bubbling

let parent = document.getElementById("parent");
parent.addEventListener("click", () => {
    console.log("parent clicked");
});

let child = document.getElementById("child");
child.addEventListener("click", (event) => {
    console.log("button clicked");
});

// example 2
let grandparent = document.getElementById("grandparent");
grandparent.addEventListener("click", () => {
    console.log("grand parent clicked");
});

let parent1 = document.getElementById("parent1");
parent1.addEventListener("click", () => {
    console.log("parent element clicked");
});

// example 3
let parent2 = document.getElementById("parent2");
parent2.addEventListener("click", () => {
    console.log("parent clicked");
});

let click1 = document.getElementById("child3");
click1.addEventListener("click", (event) => {
    console.log("button clicked");
    event.stopPropagation();
});
