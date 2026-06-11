//date obj

let now = new Date();

console.log(now);

// curent date 
let date = new Date();

console.log(date.toDateString());

//time 

let time = new Date();

console.log(date.toLocaleTimeString())

//dd-mm-yy

let date1 = new Date();

console.log(date1.toLocaleDateString());

// without using toLocaleDateString()

let date2 = new Date();

let day = date2.getDate();
let month = date2.getMonth();
let year = date2.getFullYear();

console.log(`with yousing toLocalDatestring : ${day}/${month}/${year}`);

// individual date components

let now1 = new Date();

console.log("year :",now.getFullYear());
console.log("date :",now.getDate());
console.log("month :",now.getMonth());
console.log("hours :",now.getHours());
console.log("sec :",now.getSeconds());
console.log("minutes :",now.getMinutes());

//template litrals