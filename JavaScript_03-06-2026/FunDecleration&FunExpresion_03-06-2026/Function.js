// function decleration

function dec(name){
    return `hello , ${name}!`
}
console.log("chandraa");

// function expression 

let greet = function greetUser(name){
    return `hello , ${name}!`
}
console.log("chandra sekhar")

// anonymous function

let any = function (name){

    return `heloo , ${name}!`
}
console.log("ravi")

//Arrow function 

let arrow = (name)=>{
    return `heloo , ${name}!`;
}
console.log(arrow("rahul"));

//
let great = name =>`heloo , ${name}!`;
console.log(great("ramesh"))

// all in one 

function add(a,b){
    return a+b;
}

let multiply = function multiply(a,b){
    return a*b;
};

let sub = function(a,b) {
    return a-b;
};

let divide = (a,b)=>a/b;

console.log(add(10,3));//fun decleration
console.log(multiply(10,3));//fun expression
console.log(divide(10,3));//arrow fun
console.log(sub(10,3));//anonymus fun



// practice 
// fun decleration
// function square(num){
//     return num *num
// }