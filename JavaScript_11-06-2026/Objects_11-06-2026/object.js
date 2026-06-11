// using for in loop 

let person ={
    name : "chandra",
    age : 23,
    city : "atp"
}

for (key in person){
    console.log(key)
}


//key and values

let person1 = {
    name : "sekar",
    role : "ase",
    sal : 20000
}

for(let key in person1){

    console.log(`${key} : ${person1[key]}`)
}

//count properties 

let count = 0;

for(let key in person1){
    count++;
};
console.log(count);


let score = {
    maths : 45,
    science : 34,
    english : 67
};

let total = 0;

for(let key in score){
    total += score[key];
}
console.log(total);


//only string values 

let data = { 
    name : "cahdnra",
    age : 45,
    role : "ase"
};

for(let key in data){
    if(typeof data[key] === "string"){
        console.log(data[key]);
    }
}

// using copying the values 

let copy = {};

for(let key in data){
copy[key] = data[key];
}
console.log(copy);

// template litrals 

let name = "chadra";

let age =34;

let msg = `my name is ${name} and iam ${age} years old `;

console.log(msg);

//using expressinos

let a =20;
let b =30;

console.log(`sum = ${a+b}`);


const user = {
  name: "sekhar",
  city: "Hyderabad"
};

const profile = `User: ${user.name}
City: ${user.city}`;

console.log(profile);

//function call inside teprlate string 

function hai(name){
    return `hello! ${name}`
};

console.log(`${hai("chandra")} welcome `)



// using math object

let a1 = 4.5;
let b1 = 5.3;
console.log(Math.round(a1));
console.log(Math.round(b1));
console.log(Math.floor(a1));
console.log(Math.floor(b1));
console.log(Math.ceil(a1));
console.log(Math.ceil(b1));
console.log(Math.random(a1));
console.log(Math.random(b1));

let num = 7.6;

console.log("Round:", Math.round(num)); 
console.log("Floor:", Math.floor(num)); 
console.log("Ceil:", Math.ceil(num));   

let random = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", random);

// string obj

let str = "hello chandra welcome";

console.log(str.length);

//slice 

console.log(str.slice(0,10));

//sub string 

console.log(str.substring(0,11));

// replace 

console.log(str.replace("chndra","chandu"))

//to upper case

console.log(str.toUpperCase());

//to lower case

console.log(str.toLowerCase());

//trim
console.log(str.trim());

//charAt

console.log(str.charAt(11));