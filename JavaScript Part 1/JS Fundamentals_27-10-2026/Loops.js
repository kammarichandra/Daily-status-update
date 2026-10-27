// for 

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// while 

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

// do while 
let i1 = 1;

do {
    console.log(i1);
    i++;
} while (i <= 5);

// factorial 

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log("Factorial:", factorial);

// even numbers 

console.log("Even numbers:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Odd numbers:");

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}