// implementing using some and every

let marks = [22,44,45,65,67];

let hasPassed = marks.some(mark => mark>=45);

console.log(hasPassed);

//using every

let AllPassed = marks.every(mark => mark >=30);

console.log(AllPassed);

// checking items stock or not 

let products =[
    {name : "laptop",stock : 10},
    {name : "mobile",stock : 30},
    {name : "earbuds" , stock : 1}
];

let OutofStock = products.some(product => product.stock === 0);

console.log(OutofStock);

// using every 

let AllitemStock = products.every(product => product.stock>0);
console.log(AllitemStock);

//user permissions 

let role = ["user","ASE"];

let result = role.some(roles => roles === "user"||roles === "ASE")

console.log(result);

//form validation 

let fields = ["chandra","chandra@gmail.com","9908133058"];

let AllFields = fields.every(field => field.trim()!=="");

console.log(AllFields);

// age validation 

let ages = [22,44,54,23];

let hasAdult = ages.some(age => age>=18);

console.log(hasAdult);

//using every

let Alladuts = ages.every(age => age>=18);

console.log(Alladuts);

let emails = [
    "chandra@gmail.com",
    "sekargmail.com"
];

let HasInvalidmail = emails.some(email => !email.includes("@"));

console.log(HasInvalidmail);


// Array itterations using looops

let fruits = ["apple","banana","mango","orange"];

//for loop

for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i])
};

//while loop 

let i1 = 0;

while(i1<fruits.length){
    console.log(fruits[i1]);
    i1++;
}

//for of

for(let fruits1 of fruits){
    console.log(fruits1);
};

// for each 

fruits.forEach((fruit,index)=> {
    console.log(index,fruit);
}) 

//map

let uppercase = fruits.map(fruit => fruit.toUpperCase());

console.log(uppercase);

//filter 

let long = fruits.filter(fruit => fruit.length>5);

console.log(long);

//find 

let find = fruits.find(fruit => fruit.startsWith("b"));

console.log(find);

//some 

let hasmango = fruits.some(fruit => fruit === "mango");

console.log(hasmango);

//every 

let allfruits = fruits.every(fruit => fruit.length>4);

console.log(allfruits);

//reduce 

let reduce = fruits.reduce((total,fruit)=>total+fruit.length,0);

console.log(reduce);

