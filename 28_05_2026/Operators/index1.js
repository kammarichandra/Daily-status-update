

// increment and decrement 

let count = 10;

count++;
console.log("increment ", count);

count--;
console.log("decrement ", count);


++count;
console.log("pre increment", count);
--count;
console.log("pre decrement ", count);

// turnary operator

let age = 19;

let result = (age >= 18) ? "eligible for vote" : "not elegible";

console.log(result);

//string 

let firstname = "chandra";
let lastname = "kammari";

let fullname = firstname + " " + lastname;

console.log("full name :", fullname);


// even num check

let num = 10;

if (num % 2 == 0) {
    console.log(num + " is even");
}
else {
    console.log(num + " is odd");
}

// largest two 

let num1 = 10;
let num2 = 33;

if (num1 > num2) {
    console.log(num1 + " is largest")
}
else {
    console.log(num2 + " is largest");
}
// caluclating intrest 

let principle = 100000;
let rate = 2;
let time = 12;

let intrest = (principle * rate * time) / 100;

console.log(" interst = ", intrest);


// avg marks 

let sub1 = 30;
let sub2 = 50;
let sub3 = 60;
let sub4 = 30;
let sub5 = 70;

let total = sub1+sub2+sub3+sub4+sub5;

let avg = total/5;

console.log("total marks : ",total);
console.log("avg marks ",avg);
