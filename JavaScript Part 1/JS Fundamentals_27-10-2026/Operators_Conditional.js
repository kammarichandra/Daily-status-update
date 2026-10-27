// arthmetic Operators

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// Assignment operators
let result = 10;
result += 5;
console.log("After +=:", result);

result -= 3;
console.log("After -=:", result);

//comparison
let a1 = 5;
let b1 = "5";

console.log(a1 == b1);
console.log(a1 === b1);

console.log(a1 != b1);
console.log(a1 !== b1);

// if else 


let number = -10;

if (number > 0) {
    console.log("Positive number");
} else if (number < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

// largest of three numbers 

let a2 = 25;
let b2 = 50;
let c = 35;

if (a2 >= b2 && a2 >= c) {
    console.log("Largest:", a2);
} else if (b2 >= a2 && b2 >= c) {
    console.log("Largest:", b2);
} else {
    console.log("Largest:", c);
}

// switch

let marks = 85;
let grade;

if (marks < 0 || marks > 100) {
    grade = "Invalid marks";
} else {
    switch (true) {
        case marks >= 90:
            grade = "A+";
            break;

        case marks >= 80:
            grade = "A";
            break;

        case marks >= 70:
            grade = "B";
            break;

        case marks >= 60:
            grade = "C";
            break;

        case marks >= 35:
            grade = "D";
            break;

        default:
            grade = "Fail";
    }
}

console.log("Grade:", grade);

let employeeName = null;

let result1 = employeeName ?? "Guest Employee";

console.log(result1);

let name2 = "";
console.log(name2 ?? "Guest Employee");

let anotherName = undefined;
console.log(anotherName ?? "Guest Employee");