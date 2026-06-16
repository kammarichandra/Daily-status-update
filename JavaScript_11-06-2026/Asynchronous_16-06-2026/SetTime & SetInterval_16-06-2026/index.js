// set time out

setTimeout(()=>{
    console.log("hi chandra")
},3000);

setTimeout(()=>{
    document.getElementById("message").textContent = "text updated";
},2000);

// clear timeout

let timeout = setTimeout(() => {
    console.log("welcome to js")
}, 3000);

//set interval 
setInterval(()=>{
    console.log("welcome to nyb");
},1000);

//clock

setInterval(()=>{
    let now = new Date();
    console.log(now.toLocaleTimeString());

},1000)

//example 

let sec = 0;

let valid = setInterval(() => {
    sec++;
    console.log(`timer : ${sec}`)
}, 1000);

setTimeout(() => {
    clearInterval(valid);
    console.log("timer stoped ater 10 sec")
}, 10000);

