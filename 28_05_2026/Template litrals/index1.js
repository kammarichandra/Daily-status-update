
//formating text 

let name = "chandra";
let age = 22;
let msg = "My name is " + name + " and I am " + age + " years old.";
console.log(msg);

// ontime msgs

let username = "chandra "
let hour = 18;

let grerting = `${hour < 12 ?"good morning " : hour <18 ? "good after noon" : "good evening"} ${username}`;

console.log(grerting);

// movie ticket 

let movie = "og";
let tickets = 3;
let ticketprice = 200;

let amount = tickets*ticketprice;

console.log(`Movie Name : ${movie}
    tickets : ${tickets}
    ticket price : ${ticketprice}
    amount : ${amount}`);