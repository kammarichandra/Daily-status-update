let para = document.createElement("p");
para.textContent = "heloo welcome to java script";

document.getElementById("container").appendChild(para);

//button using append 

let button = document.createElement("button");

button.textContent = "click";

document.body.append(button);

// // removing ele

// let ele  = document.querySelector("p");

// ele.remove();

// // removing child 

// let container = document.getElementById("container");
// let child  = container.querySelector("p");

// container.removeChild(child);

// inserting ele 

let div = document.createElement("div");

div.textContent = "ele inserted";

let container1 = document.getElementById("container");

container1.insertBefore(div,container1.firstChild);

