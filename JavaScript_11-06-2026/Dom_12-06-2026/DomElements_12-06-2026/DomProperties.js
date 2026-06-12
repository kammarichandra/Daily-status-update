
let heading = document.getElementById("heading");
let msg  = document.getElementById("msg");
let changebtn = document.getElementById("changebtn");

changebtn.addEventListener("click",function(){

    // change text 
    heading.textContent = "hello chandra !";
    
    //change msg
    msg.textContent = "dom is updated";

    //change style 
    heading.style.color = "blue";

    //creating new ele 
    let newpara = document.createElement("p");
    newpara.textContent = "this is new para for dom ";

    //add it to the page 

    document.body.appendChild(newpara);

})