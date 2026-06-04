//pure and impure function 

// using addition 

function add(a,b){
    return a+b;
}
console.log(add(5,4));
console.log(add(5,4));

//squre 

function square(num) {
    return num * num;
}

console.log(square(4));

// caluclating area

function calculatearea(length, width) {
    return length * width;
}

console.log(calculatearea(10, 5));

// using array

function double(number){
    return number.map(num=>num*2);
}

let nums = [1,2,3,5]
console.log(double(nums));
console.log(nums);

// impure function 

// using global scope 

let counter =0;

function increment(){
    counter++;
}
increment();
increment();
increment();

console.log(counter);

// using date 


function gettime() {
    return new Date();
}
console.log(gettime())

// comparison

// caluclating discount 
// pure function

function discount(price , discountPrice){
    return price - (price*discountPrice/100);
}
console.log(discount(1000,10));

// impure 

let discountPercent = 10;

function Discount(price) {
    return price - (price * discountPercent / 100);
}

console.log(Discount(1000));


// shoping cart 

function calculatetotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

let cart = [
    { price: 500 },
    { price: 300 }
];

console.log(calculatetotal(cart));

//impure 

let total = 0;

function addToTotal(price) {
    total += price;
}

addToTotal(500);
addToTotal(300);

console.log(total);