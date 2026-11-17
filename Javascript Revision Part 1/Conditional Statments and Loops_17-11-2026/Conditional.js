
// Conditional statments 

let number = -10;

if (number > 0) {
    console.log("Positive Number");
} else if (number < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

// even or odd

let num = 15;

if (num % 2 === 0) {
    console.log(num + " is Even Number");
} else {
    console.log(num + " is Odd Number");
}

// largest number

let a = 50;
let b = 30;
let c = 70;

if (a > b && a > c) {
    console.log(a + " is the largest number");
} 
else if (b > a && b > c) {
    console.log(b + " is the largest number");
} 
else {
    console.log(c + " is the largest number");
}

// switch 

let num1 = 20;
let num2 = 10;
let operator = "+";

switch (operator) {

    case "+":
        console.log("Addition:", num1 + num2);
        break;

    case "-":
        console.log("Subtraction:", num1 - num2);
        break;

    case "*":
        console.log("Multiplication:", num1 * num2);
        break;

    case "/":
        if (num2 !== 0) {
            console.log("Division:", num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    case "%":
        console.log("Modulus:", num1 % num2);
        break;

    default:
        console.log("Invalid Operator");
}

// Loops 

console.log("Loops : ");

// for Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while Loop

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

// do-while Loop

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 10);

