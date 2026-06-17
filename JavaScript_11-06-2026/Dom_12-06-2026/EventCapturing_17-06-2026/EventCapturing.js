let parent = document.getElementById("parent");

parent.addEventListener("click",function (){
    console.log("parent clicked");
},true);

let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    console.log("button clicked");
},true);


// ex 2

let grandparent = document.getElementById("grandparent");

grandparent.addEventListener("click",()=>{
    console.log("grand parent clicked")
},true);

let parent1 = document.getElementById("parent1");

parent1.addEventListener("click",()=>{
    console.log("parent clicked");
})

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click",()=>{
    console.log("grand parent button clicked")
},true);

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click",()=>{
    console.log("parent button clicked");
},true);


// capturing and bubbling

let parent2 = document.getElementById("parent2");

parent2.addEventListener("click",()=>{
    console.log("parent clicked");
});

let btn3 = document.getElementById("btn3");

btn3.addEventListener("click",()=>{
    console.log("button clicked");
},true);

// event delegation

let list = document.getElementById("list");

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("clicked :", event.target.textContent);
    }
});


