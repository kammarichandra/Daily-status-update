let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// comparision operators

let x = 20;
let y = 10;

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);

// logical operator 


let age = 25;
let hasID = true;

// AND operator
console.log(age >= 18 && hasID);

// OR operator
console.log(age >= 18 || hasID);

// NOT operator
console.log(!hasID);

let username = "chandra";
let password = "12345";

if(username === "chandra" && password === "12345"){
    console.log("login successfully completed");
}else{
    console.log("login failed...!")
}

// Assingment Operators

let x1 = 10;

x1 += 5;
console.log(x); // 15

x1 -= 3;
console.log(x); // 12

x1 *= 2;
console.log(x); // 24

x1 /= 4;
console.log(x); // 6

x1 %= 4;
console.log(x); // 2

x1 **= 3;
console.log(x); // 8

// inc and dec Operators 

let a2 = 10;
a2++;
console.log(a2);

let b2 = 10;
b2--;
console.log(b2);


let x2 = 10;
console.log(++x2); // 11
console.log(x2++); // 11
console.log(x2);   // 12