//var decleration

var name = "chandra";
let name1 = "sekhar";
const name2 = "kcs";

console.log(name1);
console.log(name2);
console.log(name);

// reassingment 

// const cannot reassined
var city = "atp";
city1 = "hyd";

let country = "india";
country1 = "usa";

console.log(city);
console.log(country);

// redecleration
// var allows redecleration

var age = 23;
var age = 24;
let age1 =25;//error
console.log(age);


// scope diff
// var function scope
function test(){
    if(true){
        var x = 10;
    }
    console.log(x);
}
test();

//let 
// block scope
function test(){
    if(true){
        let x1 = 10;
    }
    console.log(x1);
}
test();

//block scope
function test(){
    if(true){
        const x1 = 10;
    }
    console.log(x1);
}
test();