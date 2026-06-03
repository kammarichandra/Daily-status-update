// factorial using recursion

function recursion(n){

    if(n === 0 || n === 1){
        return 1;
    }
    return n *factorial(n-1);
}
console.log(factorial(5));

//fibonacci 

function fibonacci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;

    return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(6));


// factorial using aroww

let arrow = (n)=>{
    if(n===0||n===1){
        return 1;
    }

    return n *factorial(n-1);
};
console.log(factorial(6))

// fibonaci using arrow

let aroww1 = (n)=>{

    if(n<=1){
        return n 
    }

    return fibonacci(n-1)+fibonacci(n-2);

}
console.log(fibonacci(4))