// operators 
// Operators are symbols used to perform operations on values.
// 1.Arthmetic operators 


let a = 10;
let b = 3;

console.log(a + b); // add
console.log(a - b); // sub 
console.log(a * b); // mul
console.log(a / b); // div
console.log(a % b); // reminder
console.log(a ** b);// power 

// assingment operator 

let x = 10;

x += 5; 
console.log(x); 

x -= 3; 
console.log(x); 

x *= 2;  
console.log(x); 

x /= 4; 
console.log(x); 

x %= 4; 
console.log(x); 

// comparison operator
// ==	Equal value
// ===	Equal value and type
// !=	Not equal
// !==	Not equal value or type
// >	Greater than
// <	Less than
// >=	Greater than or equal
// <=	Less than or equal 

console.log(5 == "5");  
console.log(5 === "5"); 


let age = 20;

console.log(age > 18);   
console.log(age < 18);  
console.log(age >= 20);  
console.log(age <= 20);  
console.log(age === 20);
console.log(age !== 25);


// Logical Operators
// Logical operators are mainly used to combine conditions. 

// both conditionas must be true 

let age1 = 25;
let hasID = true;

console.log(age1 >= 18 && hasID);

// || operator 

let isWeekend = false;
let isHoliday = true;

console.log(isWeekend || isHoliday);

// !

let loggedIn = true;

console.log(!loggedIn); 

// Template Literals
// Template literals make it easy to create strings containing variables and expressions.

let name = "Rahul";

console.log(`Hello ${name}`);

let name2 = "Rahul";
let age2 = 22;
let city = "Hyderabad";

console.log(`My name is ${name2}. I am ${age2} years old and I live in ${city}.`);

let a1 = 10;
let b1 = 20;

console.log(`The sum is ${a1 + b1}`);