// recursive function 
//1.factorial

function factorial(n){
    if(n===0||n===1){
        return 1
    }

    return n*factorial(n-1);
}
console.log(factorial(5));


// compare 

function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));



// sum of nums 

function sum(n){

    if(n===1){
        return 1;
    }

    return n+sum(n-1);
}
console.log(sum(19));


// compare 

function sum1(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sum1(5));


// fibonaci 

function fibonaci(n){
    if(n<=1){
        return n;
    }

    return fibonaci(n-1) + fibonaci(n-2);
}
console.log(fibonaci(6));


// compare 

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

console.log(fibonacci(6));


// power caluclation 

function power(base , exponent){
    if(exponent === 0){
        return 1;
    }

    return base*power(base , exponent -1)
}
console.log(power(2,4))

// count nums

function countdown(n){

    if(n===0){
        console.log("done!")
        return ;
       
    }

console.log(n);
countdown(n-1);
}
countdown(5)