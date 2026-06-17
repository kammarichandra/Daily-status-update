// capture flow

let grandparent =document.getElementById("grandparent");

grandparent.addEventListener("click",()=>{
    console.log("grandparent");
},true);

let parent = document.getElementById("parent");

parent.addEventListener("click",()=>{
    console.log("parent");
},true);

let child = document.getElementById("child");

child.addEventListener("click",()=>{
    console.log("button");
},true);


// bubbling 


let grandparent1 =document.getElementById("grandparent1");

grandparent1.addEventListener("click",()=>{
    console.log("grandparent");
});

let parent1 = document.getElementById("parent1");

parent1.addEventListener("click",()=>{
    console.log("parent");
});

let child1 = document.getElementById("child1");

child1.addEventListener("click",()=>{
    console.log("button");
});