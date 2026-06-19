let input = document.getElementById("input");

let btn = document.getElementById("btn");

let list = document.getElementById("list");

let loading = document.getElementById("loading");

let weatherCard = document.getElementById("wetherCard");


let weatherDisplay = document.getElementById("weatherDisplay");

let historyList = document.getElementById("list");

let history = [];

let city = "";

//promise 

function fetchWether(city){

    return new Promise((resolve)=>{

        loading.textContent = "loading wether..";

        setTimeout(()=>{
            let temp = Math.floor(Math.random()*35) + 5;

            resolve({
                city,
                temperature : temp,
                condition : temp > 25 ? " hot 🌤" : "cool 🌨"
            });
        },2000)
    });
}

// wether dom 

function renderWeather(data) {
    weatherDisplay.innerHTML = `
        <h3>${data.city}</h3>
        <p>Temperature: ${data.temperature}°C</p>
        <p>Condition: ${data.condition}</p>
    `;
}

//callback 

function action(msg){

    console.log("action :",msg);

}

// serch event

btn.addEventListener("click", () => {
    let city1 = input.value.trim();

    if (!city1) return;

    city = city1;

    fetchWether(city1).then(data => {
        renderWeather(data);
        loading.textContent = "";

        addToHistory(city1);

        action("wether fetched " + city1);
    });
});

// add to history 

function addToHistory(city) {

    if (!history.includes(city)) {
        history.push(city);
        renderHistory();
    }
}

// render history 

function renderHistory(){
    historyList.innerHTML = "";

    history.forEach((city, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
        <span class="history-item" data-city="${city}">
                ${city}
            </span>
            <button data-index="${index}" class="deleteBtn">Delete</button>
        `;

        historyList.appendChild(li);
    });
}


// evwnt deligation 

historyList.addEventListener("click",(e)=>{

    if(e.target.classList.contains("history-item")){
        let city = e.target.dataset.city

        fetchWether(city).then(data =>{
            renderWeather(data)
        })
    }

    // delete history item

    if(e.target.classList.contains("deleteBtn")){

        let index = e.target.dataset.index;

        history.splice(index,1);

        renderHistory();
    }
})

//timer function

setInterval(()=>{
    if(city){
        fetchWether(city).then(data=>{
            renderWeather(data);
            action("auto refreshed wether " + city);
        })
    }
},5000);

// ontime timer 

setTimeout(()=>{
    console.log("wether app loadded ")
},1000);
