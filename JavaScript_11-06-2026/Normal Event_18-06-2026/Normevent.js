
let button = document.getElementById("button");

button.addEventListener("click",function(){
    console.log("button clicked")
})



//select event

let select = document.getElementById("select");

select.addEventListener("change",function(event){
    console.log("selcted :",event.target.value);
});


//input event

let input = document.getElementById("input");

input.addEventListener("input",function(event){
    console.log("value :" , event.target.value);
})


// submit event 

let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let data = new FormData(form);

    console.log("user name:", data.get("username"));
});

