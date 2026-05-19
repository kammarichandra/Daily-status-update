// normal event

let button = document.getElementById("btn");

button.addEventListener("click", function () {
    document.getElementById("cartmsg").innerText = "Product added to cart.";
});

// debouncing

let serchbox = document.getElementById("serchBox");

function debounce(func, delay) {
    let timer;

    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
    };
}

function serchproduct() {
    let value = serchbox.value;
    document.getElementById("serchtext").innerText = "searching: " + value;
}

serchbox.addEventListener("keyup", debounce(serchproduct, 1000));

// throttling

let count = 0;

function throttle(func, delay) {
    let lastCall = 0;

    return function (...args) {
        const context = this;
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(context, args);
        }
    };
}

function updatescroll() {
    count++;
    document.getElementById("scrollcount").innerText = "scroll count: " + count;
}

window.addEventListener("scroll", throttle(updatescroll, 1000));