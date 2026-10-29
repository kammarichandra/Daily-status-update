const parent = document.getElementById("parent");
const child = document.getElementById("child");

// Event Object
child.addEventListener("click", function (event) {
    console.log("Event Type:", event.type);
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
});

// Event Bubbling
parent.addEventListener("click", function () {
    console.log("Parent Clicked");
});

child.addEventListener("click", function () {
    console.log("Child Clicked");
});