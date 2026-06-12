// Dom 
//1.get element byid
//2.get elements by classname 
//3.get elements by tagname 
//4.get elements by query selector

let msg = document.getElementById("msg");

console.log(msg)

let hai = document.getElementsByClassName("hai");

console.log(hai);

let tag = document.getElementsByTagName("h3");

console.log(tag);


let query = document.querySelector(".hai");

console.log(query);

let all = document.querySelectorAll(".hai");

console.log(all);


// modifiying Dom properties 


let title = document.getElementById("title");

console.log(title.textContent);

// modify content 

title.textContent = "welcome";


// reading inside an element 

let box = document.getElementById("box");

console.log(box.innerHTML);

box.innerHTML = "<i>updated</i>";

// modifying styles 

let msg1 = document.getElementById("msg1");

msg1.style.color = "blue";
msg1.style.fontSize = "22px";
