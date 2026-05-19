
let container = document.getElementById("container");
let list = document.getElementById("list");

// event capturing 

container.addEventListener("click",function(){
    // console.log("product added ")
},true);


// event delegation

container.addEventListener("click",function(event){
if(event.target.id === "addbtn"){
    let productname = event.target.closest("#product").querySelector("h3").textContent;
    let li = document.createElement("li");
    li.textContent = productname;
    list.appendChild(li);
}
});

// event bubbling

container.addEventListener("click",function(){
    console.log("product added ")
});

//stop propagation

list.addEventListener("click",function(event){
    event.stopPropagation();
    alert("selected product :"+ event.target.textContent);
    console.log("selected product :"+ event.target.textContent);
})