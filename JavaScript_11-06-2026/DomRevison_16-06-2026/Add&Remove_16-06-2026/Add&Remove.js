// remove

let ele = document.querySelector("p");

ele.remove();

//remove child 

let removechild = document.getElementById("container1");

removechild.remove()
console.log("remove child ele");

// Add element 

let div = document.createElement("div");

div.textContent = "welcome chandra";

document.body.appendChild(div);

console.log("ele added");