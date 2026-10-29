
//    TASK 1: DISPLAY WELCOME MESSAGE

const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function () {

    welcomeMessage.textContent = "Welcome to JavaScript DOM Events!";

});


/* =====================================
   TASK 2: CHANGE BACKGROUND COLOR
===================================== */

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {

    document.body.style.backgroundColor = "lightblue";

});


/* =====================================
   TASK 3: INCREASE AND DECREASE COUNTER
===================================== */

const counter = document.getElementById("counter");

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

// Increase counter

increaseBtn.addEventListener("click", function () {

    count++;

    counter.textContent = count;

});

// Decrease counter

decreaseBtn.addEventListener("click", function () {

    count--;

    counter.textContent = count;

});

// Reset counter

resetBtn.addEventListener("click", function () {

    count = 0;

    counter.textContent = count;

});


/* =====================================
   TASK 4: LIKE AND DISLIKE BUTTONS
===================================== */

const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");

const likeCount = document.getElementById("likeCount");
const dislikeCount = document.getElementById("dislikeCount");

let likes = 0;
let dislikes = 0;

// Like button

likeBtn.addEventListener("click", function () {

    likes++;

    likeCount.textContent = likes;

});

// Dislike button

dislikeBtn.addEventListener("click", function () {

    dislikes++;

    dislikeCount.textContent = dislikes;

});


/* =====================================
   TASK 5: TOGGLE PASSWORD VISIBILITY
===================================== */

const password = document.getElementById("password");

const togglePasswordBtn =
    document.getElementById("togglePasswordBtn");

togglePasswordBtn.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePasswordBtn.textContent = "Hide Password";

    } else {

        password.type = "password";

        togglePasswordBtn.textContent = "Show Password";

    }

});


/* =====================================
   TASK 6: LIGHT MODE AND DARK MODE
===================================== */
Input_chnageEvent
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "Light Mode";

    } else {

        themeBtn.textContent = "Dark Mode";

    }

});
