
//Bom(broser object model)

console.log(window)

console.log(" width :" , window.innerWidth);
console.log("Height :",  window.innerHeight);


//alert,conform and prompt

alert("welcome to nyb");

let result = confirm("what is your name ");


if(result){

    console.log("user accepted");
}else{

    console.log("user canclled order")
}

//prompt

let name = prompt("enter your name :");

console.log("hello " + name);


// location 

console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);

let info = document.getElementById("info").innerHTML = `

    <p>Name: ${name}</p>
    <p>Language: ${navigator.language}</p>
    <p>Resolution: ${screen.width} x ${screen.height}</p>
    <p>URL: ${location.href}</p>
    
`;