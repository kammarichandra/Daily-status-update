//math objects 

let num = 4.5;

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.trunc(num));

let value = 5.7;

console.log(Math.floor(value))
console.log(Math.round(value));
console.log(Math.ceil(value));
console.log(Math.round(value));


// power , squre , cube root 

let n = 10;

console.log(Math.pow(2,3));
console.log(2**3);
console.log(Math.sqrt(23))
console.log(Math.cbrt(24))

// min & max

// let num1 = [2,,45,67,,2324,97,6]

console.log(Math.min(2,45,67,2324,97,6))
console.log(Math.max(2,45,67,2324,97,6))

//random numbers 

let random = Math.floor(Math.random()*10)+1;
console.log(random);

function getrandom(min,max){

    return Math.floor(Math.random()*(max-min +1))+min;
}
console.log(getrandom(10,80));

//value & sign

console.log(Math.abs(-10));
console.log(Math.sign(10));
console.log(Math.sign(-5));
console.log(Math.sign(5));

// gnerate random number at certain range 

function getRandomnum (min , max){

    return Math.floor(Math.random()* ( max - min+1))+min;
} 
console.log(getRandomnum(1000,5000));

// dice role 

function random1 (min , max ){

    return Math.floor(Math.random()*(max - min+1))+min;
}

console.log(random1 (1,6))

// price

function price(max,min){
    return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(price(233,533))

//string 

let str = new String("education");
let count = 0;

for (let i = 0;i<str.length;i++){
    let ch =str.charAt(i).toLowerCase();
    if ("aeiou".includes(ch)){
        count++;
    }
}
console.log("vowel count :",count);

//reverse string 

let str1 = new String("developer");
let reversed = "";

for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1.charAt(i);
}

console.log("reversed:", reversed);

//toloower to uppercase 

let str2 = new String("java script is very powerfull");

console.log(str2.toLowerCase());
console.log(str2.toUpperCase());

