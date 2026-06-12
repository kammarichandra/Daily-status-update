let student = {
    name : "chandra",
     course: "JavaScript",
    city: "Vijayawada"
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

console.log(`Welcome ${student.name.toUpperCase()}!`);

//greeting format 

let now = new Date();

let hour = now.getHours();

let greeting;

if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 18) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

console.log(`${greeting}! Current time is ${now.toLocaleTimeString()}`);

//dice role 

let dice = Math.floor(Math.random() * 6) + 1;

console.log(` Dice Result: ${dice}`);


// user name 

let username = "chandra 123";

username = username.trim();

if (username.length >= 5) {
    console.log(`Valid username: ${username}`);
} else {
    console.log("invalid username");
}

//emp report

const employee = {
    id: 101,
    name: "suresh",
    department: "IT"
};

let today = new Date();

let bonus = Math.floor(Math.random() * 5000) + 1000;

console.log("Employee Details");

for (let key in employee) {

    let value = employee[key];

    if (typeof value === "string") {
        value = value.toUpperCase();
    }

    console.log(`${key}: ${value}`);
}

console.log(`Report Date: ${today.toDateString()}`);
console.log(`Bonus Awarded: ${bonus}`);