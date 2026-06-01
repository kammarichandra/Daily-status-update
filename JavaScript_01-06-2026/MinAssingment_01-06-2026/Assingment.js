
// with parameters

function great(name){
    console.log("hello"+name);
}
great("chandra");
great("sekhar");

// without parameters

function fun(){
    console.log("heloo chandra ")
}
fun();

//return value;

function multiply(a,b){
    return a*b;
};
let result = multiply(2,44);
console.log(result);

// defult parameters

function calculateprice(price,tax=0.18){
    return price*(price*tax)
}
console.log(calculateprice(1000));
console.log(calculateprice(1000,0.18))

//argument object 

function display1(){
    console.log(arguments[0]);
    console.log(arguments[1]);
}
display1("javascript","css")


//rest parameters

function shownums(...nums){
    console.log(nums)
}
console.log(10,12,3,4,)

//loops

//for loop

for(let i =1;i<=5;i++){
    console.log(i)
}

// while loop

let count = 0;

while(count<=5){
    console.log("count :",count);
    count++;
}

// do while loop 

let num1 = 1;

do{
    console.log("number :",num1)
    num1++;
}while(num1<=5);


// for in loop
let stu = {
    name : "chandra",
    age : 22,
    course : "mba"
};

for(let key in stu){
    console.log(key + ":" , stu[key])
}

//for of

let fruits = ["apple","mango","banana"];

for(let fruit of fruits ){
    console.log(fruit);
}

//arguments obj

function calculate(){
    let total = 0;

    for(let i = 0;i<=arguments.length;i++){
        total += arguments[i]
    }
    return total
}
console.log("Total :",calculate(10,33,55,4,3));

// rest parameters

function findAvg(...marks){
    let total = 0;

    for(let mark of marks){
        total += mark;
    }
    return total/marks.length;
}
console.log("AVG :" , findAvg(11,33,55,66))

// normal parameters and rest 

function empdetails(name,dept,...skills){
    console.log("name :",name);
    console.log("dept :",dept)
    console.log("skills :",skills)
}

empdetails(
    "ravi",
    "robotics",
    "html",
    "css"
);

// even add odd check usin function 

function checkEvenOdd(num) {

    if (num % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log("8 is", checkEvenOdd(8));
console.log("7 is", checkEvenOdd(7));


