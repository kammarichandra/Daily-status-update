function squre(a, b) {
    return a * b
}
console.log(squre(10, 20))

// even or odd

function even(a) {
    if (a % 2 === 0) {
        console.log("even number");
    } else {
        console.log("odd num");
    }
}
even(22);

//largest num

function largest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(largest(12,34,23));

// factorial 

function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));

// fun expression 

const area = function (length, width) {
    return length * width;
};

console.log(area(10, 5)); // 50

// intrest calculator 

const simpleInterest = function (p, r, t) {
    return (p * r * t) / 100;
};

console.log(simpleInterest(10000, 5, 2));

// arrow function

const multiply = (a, b) => a * b;

console.log(multiply(5, 4));

// palindrome 

const isPalindrome = (str) => {

    const reversed = str.split("").reverse().join("");

    return str === reversed;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello")); 

// string length 

const stringLength = (str) => str.length;

console.log(stringLength("JavaScript")); 

// default and rest parameters 

function hai(name = "guest"){
    return `hello ${name} !`
}
console.log(hai());
console.log(hai("chandra sekhar"));


function totalPrice(price, taxRate = 0.18) {

    return price + (price * taxRate);

}

console.log(totalPrice(1000));  
console.log(totalPrice(1000, 0.1)); 

// rest parameters

function sum(...numbers) {

    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30));     
console.log(sum(1, 2, 3, 4, 5));   



// callback function

function bye(num , callback){
    return callback(num)
}

function squre(num){
    return num*num
}

console.log(bye(5,squre));


function calculator(a, b, callback) {
    return callback(a, b);
}

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

console.log(calculator(10, 5, addition));       
console.log(calculator(10, 5, subtraction));    
console.log(calculator(10, 5, multiplication)); 
console.log(calculator(10, 5, division));       


function process(num , callback){
    let result = num*2

    callback(result);

}

function display(result){
    console.log(result)
}

console.log(process(4,display))

// closure 

function createcounter(){
    let count = 0;

    return function inner(){
        count ++;
        return count
    }
}

const counter = createcounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

// bank account
function createBankAccount(initialBalance) {
    
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (amount > balance) {
                return "Insufficient balance";
            }

            balance -= amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

console.log(account.deposit(500));    
console.log(account.withdraw(200));  
console.log(account.getBalance());    