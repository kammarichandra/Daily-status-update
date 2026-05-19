

let text  = document.getElementById ("text");
let count = document.getElementById("count");

text.addEventListener("input",()=>{
    count.textContent = text.value.length;

});