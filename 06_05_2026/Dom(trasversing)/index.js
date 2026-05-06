let button = document.getElementById("btn");

button.addEventListener("click",function(){
    alert("button clicked");
    console.log("button clicked ")
});

let child = document.getElementById("child");

console.log(child.parentElement)

let list = document.getElementById("list");

console.log(list.children);

let firstchild = document.getElementById("items");
console.log(firstchild.firstChild);

let lastchild = document.getElementById("courses");

console.log(courses.lastchild);



let box = document.getElementById("box");
let btn1 = document.getElementById("btn1");

btn.addEventListener("click", function () {
    console.log("parent element");
    console.log(btn1.parentElement);

    console.log("children");
    console.log(box.children);

    console.log("first child");
    console.log(box.firstElementChild);

    console.log("last element child");
    console.log(box.lastElementChild);
});

