//event bubling 
let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click",function(){
    alert("parent element clicked")
    console.log("parent element clicked..")
});

child.addEventListener("click",function(){
    alert("child element clicked");

    console.log("child element cliked..")
});


// event capuring 

let parent1 = document.getElementById("parent1");
let child1 = document.getElementById("child1");

parent1.addEventListener("click",function(){
    alert("parent1 cliked ")
    console.log("parent1 cliked")
})

child1.addEventListener("click",function(){
    alert("child1 clicked");
    console.log("child1 clickedd")
})

//delegation

let list  = document.getElementById("list");

list.addEventListener("click", function(event) {
    const clickedItem = event.target;
    if (clickedItem && clickedItem !== list) {
        alert(clickedItem.textContent);
        console.log(clickedItem.textContent);
    }
});