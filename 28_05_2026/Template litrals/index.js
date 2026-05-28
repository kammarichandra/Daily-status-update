
// display student details 

let name = "chandra";
let age = 22;
let course = "js";

let msg = `student Name : ${name}
 age : ${age} 
 course : ${course}`;

console.log(msg);

// caluclate bill 

let item = "laptop";
let price = 45000;
let quntity = 2;

let total = price*quntity

console.log(`item : ${item}`)
console.log(`price : ${price}`)
console.log(`quantity : ${quntity}`)
console.log(`total : ${total}`)

// emp slip 

let empname = "chandra";
let basicsal = 15000;
let bonus = 4000;

let finalsal = bonus+basicsal;

let slip = `empname : ${empname}
basic sal : ${basicsal}
bonus : ${bonus}
finalsal : ${finalsal}`;

console.log(slip);

// intrst caluclate 

let p = 100000;
let r = 2;
let t = 12;

let si = (p*t*r)/100;

console.log(`simple interest :${si}`)


// welcome msg 

let username = "admin";

console.log(`welcome ${username} to NYB`)


//discount 

let product = "mobile";
let price1 = 20000;
let discount1 = 10;

let finalprice1 = price1 - (price*discount1/100);

console.log(`
    product name : ${product}
    price : ${price1}
    discount : ${discount1}
    final price : ${finalprice1}`)