// eventlistener 

// btn.addEventListneer("event",()=>{

// })

let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    console.log("button clicked");
})

let msg = document.getElementById("msg");
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click",()=>{
    msg.textContent = "text has been changed"
})

// event deligation

let list = document.getElementById("list");

list.addEventListener("click",(event)=>{
    if(event.target.tagname ="li"){
        alert(event.target.textContent);
    }
})

// formhandling 
// syntax : form.addEventListner("event",(event)=>{
//     event.preventDefault();    
// })

let form = document.getElementById("from");
let input = document.getElementById("input");
let result = document.getElementById("result");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    result.textContent = "hello " + input.value;
})


//     const form1 = document.getElementById("registrationForm");
//     const output = document.getElementById("output");

//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;

//         output.textContent = `Name: ${name}, Email: ${email}`;
//     });