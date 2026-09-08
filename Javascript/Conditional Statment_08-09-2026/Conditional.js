// Truthy and Falsy Values : 

// In JavaScript, values are treated as either truthy or falsy when used in conditions.
// Falsy values
// These are considered false:
// false
// 0
// ""
// null
// undefined
// NaN

let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Please enter username");
}


// Conditional Statements
// Conditional statements allow your program to make decisions.
// if

let age = 18;

if (age >= 18) {
    console.log("you are eligible");
};

//if-else 
let marks = 45;

if (marks >= 35) {
    console.log("passed")
} else {
    console.log("failed..")
}

let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// esle if

let mark = 5;

if (mark >= 80) {
    console.log("A")
} else if (mark >= 40) {
    console.log("B grade")
} else if (mark >= 30) {
    console.log("c grade ")
} else {
    console.log("Better luck next time")
}

// nested conditions 

let age1 = 20;
let hasID = false;

if (age1 >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("You are under 18");
}

let username1 = "admin";
let password = "1234";

// Check username first.
// If username is correct, check password.
// Otherwise print "Invalid username".

if (username1 === "admin") {
    if (password) {
        console.log("Acsess Granted")
    }
    else {
        console.log("password required")
    }
} else {
    console.log("invalid username");
};

// switch
// Useful when you want to compare one value against multiple possible values.

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

let choice = 2;

// 1 → "Pizza"
// 2 → "Burger"
// 3 → "Pasta"
// Anything else → "Invalid choice"

switch (choice) {
    case 1:
        console.log("pizaa");
        break;
    case 2:
        console.log("Burger");
        break;

    case 3:
        console.log("Pasta");
        break;

    default:
        console.log("invalic choice..");

}