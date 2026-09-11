// setTimeout()
// setTimeout() runs a function only once after a specified time.

setTimeout(() => {
    console.log("timer executed")
}, 1000)

setTimeout(() => {
    console.log("time is up ");
}, 2000)

// mutiple timers

setTimeout(() => {
    console.log("hello");
}, 3000);
setTimeout(() => {
    console.log("chandra sekhar");
}, 5000);
setTimeout(() => {
    console.log("good bye....");
}, 7000);

// setInterval()
// setInterval() runs a function repeatedly after a fixed time interval.

setInterval(() => {
    console.log("hai")
}, 3000)

let count = 0;

let interval = setInterval(() => {
    count++;
    console.log(count)
    if (count === 5) {
        clearInterval(interval);
    }
}, 2000)


let interval1 = setInterval(() => {
    console.log("welcome to nyb");
}, 1000)

setInterval(() => {
    clearInterval(interval1);
    console.log("stoped");
}, 10000)

// clearTimeout()
// clearTimeout() is used to stop a setTimeout() before it runs.

let timer = setTimeout(() => {
    console.log("clear time out is running ")
}, 5000)

clearInterval(timer);

// clear interval 
// it will clear the settimeout function
let count1 = 0
let timer1 = setInterval(() => {
    count1++;
    console.log(count1);
    if (count1 === 5) {
        clearInterval(timer1);
    }
})

// Callback Function
// A callback function is a function that is passed as an argument to another function and called later.

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome to JavaScript");
}

greet("Chandra", message);

// callback hell 
// When callbacks are placed inside multiple callbacks, 
// the code becomes difficult to read and maintain. This is called Callback Hell.

setTimeout(() => {
    console.log("step 1");
    setTimeout(() => {
        console.log("step 2");

        setTimeout(() => {
            console.log("step 3");
        }, 1000)

        setTimeout(() => {
            console.log("step 4");

            setTimeout(() => {
                console.log("step 5");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000)