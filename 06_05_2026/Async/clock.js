
setInterval(function(){

    let now = new Date();

    document.getElementById("clock").innerText = now.toLocaleTimeString();
},1000)


let interval;

function startTimer(){
    interval = setInterval(function(){
        console.log("timer running ")
    },1000)
}

function StopTimer(){
    clearInterval(interval);

    console.log("timmer stopped ")
}

// setInterval ( function(){
//     let now = new Date();

// document.getElementById("clock1").innerText = now.toLocaleTimeString();
// },1000)

