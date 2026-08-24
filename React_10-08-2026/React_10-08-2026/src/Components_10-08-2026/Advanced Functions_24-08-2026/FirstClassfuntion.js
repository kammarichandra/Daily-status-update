function a() {

    console.log("heloo chnadra sekhar ")
}
a();

let fun = function () {

    console.log("fun declerd by variable");
}
fun();


function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b;
}

let operations = [add, sub, multiply];

console.log(operations[0](10, 5))
console.log(operations[1](10, 25))
console.log(operations[2](10, 45))


let obj = {
    add: function (a1, b1) {
        return a1 + b1
    },

    sub: function (a1, b1) {
        return a1 - b1
    },
    multiply: function (a1, b1) {
        return a1 * b1
    }
}

console.log(obj.add(10, 20))
console.log(obj.sub(20, 13))
console.log(obj.multiply(23, 45))

// hof

function calculate(a, b, operation) {
    
    return operation(a,b);
}

function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, sub));


function Process(number , operation){
    return operation(number);
}

console.log(Process(5,a => a*2));
console.log(Process(15,a => a*2));
console.log(Process(25,a => a*2));


function multiplier(factor){
    return factor
}

let double = multiplier(2)
let triple = multiplier(3);

console.log(double(20));
console.log(triple(24));