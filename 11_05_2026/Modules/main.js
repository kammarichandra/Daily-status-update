// import { Emp } from "./index.js";

// const employee = new Emp("Chandra", 50000);
// console.log(employee.getDetails());

// console.log(username);
// console.log(age);

// login();

import { multiply as mul } from "./index.js";

console.log(mul(33,44));

import * as products from "./index.js";

console.log(products.pro1);
console.log(products.pro2);
console.log(products.pro3);
console.log(products.price);


import { addtocart , showcart } from "./index.js";

addtocart("pizza");
addtocart("burger");
addtocart("burger");
addtocart("burger");
addtocart("burger");
addtocart("burger");

showcart();

import { employeee } from "./index.js";

let emp1 = new employeee("chandra",9000);

emp1.display();

import { deposit,withdraw,checkbalance } from "./index.js";

deposit(10000);
withdraw(200);
checkbalance();


import { totalMarks,calculateAvg } from "./index.js";

let marks  = [80,90,20,35];

console.log(totalMarks(marks));
console.log(calculateAvg(marks));

