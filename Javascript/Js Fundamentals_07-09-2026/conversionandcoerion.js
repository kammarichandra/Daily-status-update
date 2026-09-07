// Type Conversion
// Type conversion means you explicitly change one data type into another.
// string to number 

let age = "25";

let numberAge = Number(age);

console.log( typeof age);
console.log(typeof numberAge);

// number to string 

let price = 100;

let priceString = String(price);

console.log(priceString);
console.log(typeof priceString);

// boolean to number
console.log(Number(true));   
console.log(Number(false));  


// type Coercion
// Type coercion happens when JavaScript automatically converts one type to another.

let result = "10" + 5;

console.log(result);

console.log("10" - 5);  
console.log("10" * 2);  
console.log("10" / 2);  