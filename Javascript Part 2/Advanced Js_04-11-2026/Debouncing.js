let timer;

const searchInput = document.getElementById("search");
const result = document.getElementById("result");

function searchProducts(value) {

    result.innerText = "Searching for: " + value;

    console.log("Search Executed:", value);

}

searchInput.addEventListener("input", function() {

    clearTimeout(timer);

    const value = this.value;

    timer = setTimeout(() => {

        searchProducts(value);

    }, 500);

});


// throttliing

const button = document.getElementById("clickBtn");
const countDisplay = document.getElementById("count");

let count = 0;
let lastExecution = 0;

button.addEventListener("click", function() {

    const currentTime = Date.now();

    if (currentTime - lastExecution >= 2000) {

        count++;

        countDisplay.innerText = count;

        console.log("Event Executed:", count);

        lastExecution = currentTime;

    } else {

        console.log("Please wait 2 seconds");

    }

});