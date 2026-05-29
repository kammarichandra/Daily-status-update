// conditional statments 

// if statment 

let age = 20;

if (age > 18) {
    console.log("elegible for vote ")
}

// if else statment 

let number = 7;

if (number % 2 === 0) {
    console.log("even num")
} else {
    console.log("odd number ")
}

// if else if else 

let marks = 75;

if (marks >= 90) {
    console.log("grade A")
} else if (marks >= 80) {
    console.log("grade B")

} else if (marks >= 70) {
    console.log("grade C")
} else {
    console.log("fail")
}


// nested if 

let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("login successfull")
    } else {
        console.log("wrong password")
    }

} else {
    console.log("invalid username ")
}

// switch 

let day = 3;

switch (day) {
    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuseday");
        break;

    case 3:
        console.log("wednesday");
        break;

    case 4:
        console.log("tharsday");
        break;

    case 5:
        console.log("friday");
        break;

    case 6:
        console.log("saturday");
        break;

    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid ")
}

// ternary operator

let age1 = 16;

let result = (age1 >= 18) ? "adult" : "minor"

console.log(result);


// multiple conditions &&

let username1 = "admin";
let password1 = "1234";

if(username1 === "admin" && password1 === "1234"){
    console.log("access gerated")
}else{
    console.log("access declined")
}

// multiple conditions with ||

let role = "ASE";

if(role === "ASE" || role === "Admin"){
    console.log("login done ")
}else {
    console.log("loin failed")
}

// discount caluclator 

let amount = 1200;

let discount = 0;


if( amount >= 2000){
    discount = 20;

}else if(amount >= 3000){
    discount = 10;
}else{
    console.log("discount : " , discount + "%");
}