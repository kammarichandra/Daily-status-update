function double1(x) {
    return x * 2;
}

function addfive(x) {
    return x + 5;
}

console.log(addfive(double1(20))); 


function createMultiplier(factor) {

    return function (number1) {
        return number1 * factor;
    };
}

let double2 = createMultiplier(2);
let triple1 = createMultiplier(3);


function process(numbers, operation) {

    return numbers.map(operation);
}

let numbers = [1, 2, 3, 4, 5];

console.log(process(numbers, double1));
console.log(process(numbers, triple1));


// compositioin with three function 

function double(num) {
    return num * 2;
}

function addFive(num) {
    return num + 5;
}

function square(num) {
    return num * num;
}

let result = square(addFive(double(5)));

console.log(result);
