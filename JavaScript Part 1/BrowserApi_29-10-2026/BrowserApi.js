
// window Api 

const windowBtn = document.getElementById("windowBtn");
const windowOutput = document.getElementById("windowOutput");

windowBtn.addEventListener("click", function () {
    windowOutput.textContent = "Window Width: " + window.innerWidth +
     " | Window Height: " + window.innerHeight;
});

// document Api
const documentBtn = document.getElementById("documentBtn");
const heading = document.getElementById("heading");

documentBtn.addEventListener("click", function () {
    heading.textContent = "Heading Changed!";
});

//locaton Api 

const locationBtn = document.getElementById("locationBtn");
const locationOutput = document.getElementById("locationOutput");

locationBtn.addEventListener("click", function () {
    locationOutput.textContent = window.location.href;
});

console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);

// history Api

const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");

backBtn.addEventListener("click", function () {
    history.back();
});

forwardBtn.addEventListener("click", function () {
    history.forward();
});

// timers

// setTimeOut

const timeoutBtn = document.getElementById("timeoutBtn");
const timeoutOutput = document.getElementById("timeoutOutput");

timeoutBtn.addEventListener("click",  ()=> {
    timeoutOutput.textContent = "Please wait...";

    setTimeout( ()=> {
        timeoutOutput.textContent = "Hello! 3 seconds completed.";
    }, 3000);
});

// setInterval 

let count = 0;
let intervalId = null;

const timer = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Start timer
startBtn.addEventListener("click", function () {
    if (intervalId !== null) {
        return;
    }

    intervalId = setInterval(function () {
        count++;
        timer.textContent = count;
    }, 1000);
});

// Stop timer
stopBtn.addEventListener("click", function () {
    clearInterval(intervalId);
    intervalId = null;
});

// Reset timer
resetBtn.addEventListener("click", function () {
    clearInterval(intervalId);

    intervalId = null;
    count = 0;

    timer.textContent = count;
});