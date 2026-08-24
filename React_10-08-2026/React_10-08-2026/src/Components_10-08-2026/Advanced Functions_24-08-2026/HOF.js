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