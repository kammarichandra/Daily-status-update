// closure 

function outer(){
    let message = "hello chandra";

    function inner(){
        console.log(message);
    }
    return inner
}

const myfun = outer();
myfun();

// counter using closure 

function counter(){
    let count = 0;

    return function(){
        count++;
        return count;
    };

}

let createcounter = counter();

console.log(createcounter());
console.log(createcounter());
console.log(createcounter());


// independent counter 

function counter1(){
    let count1 = 0;

    return function (){
        count1++;
        return count1;
    }
};

let independent1 = counter1();
let independent2 = counter1();

console.log(independent1());
console.log(independent2());
console.log(independent1());
console.log(independent2());

// private variable 

function BankAccount(initialBalance){

    let balance = initialBalance;

    return {
        deposit(amount){
            balance += amount;
        },
        getbalance(){
            return balance;
        }
    };
}

let account = BankAccount(10000);
account.deposit(5000);

console.log(account.getbalance());

// greetings generators

function creategreeting(greeting){
    return function(name){
        console.log(`${greeting},${name}!`)
    };
}

let hello = creategreeting("hello");
let welcome = creategreeting("welcome");

hello("chadra");
welcome("sekhar");

// function factory

function multiply(factor){

    return function(number){
        return number*factor;
    };
}
let double = multiply(2);
let triple = multiply(3);


console.log(double(24));
console.log(triple(45));

// demonstrating 

// passing function as an argument 

function add(a,b){
    return a+b;
}

function caluclate(x,y,add){
    return add(x,y);
}

console.log(caluclate(10,20,add));


// passing diffrent fun as an argment 

function add1(a,b){
    return a+b;
}

function multiply1(a,b){
    return a*b;
}

function caluclate1(x,y,operation){
    return operation(x,y);
}
console.log(caluclate1(5,3,add1));
console.log(caluclate1(4,6,multiply1));

// using anonymous function 

function execute(fn){

    fn();
}

execute(function(){
    console.log("hello chandra")
});

// using arrow functions

function process(fun){
    fun()
}
process(()=>{
    console.log("arrow function call back")
})