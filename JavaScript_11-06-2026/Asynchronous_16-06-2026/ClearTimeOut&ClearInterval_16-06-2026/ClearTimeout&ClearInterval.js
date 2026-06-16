
//clear timeout
let timeout1 = setTimeout(() => {
    console.log("this msg will appear")
}, 5000);

setTimeout(() => {
    clearTimeout(timeout1);
    console.log("timeout cancled");
}, 2000);

//clearinterval

let count = 0;

let time = setInterval(()=>{
    count++;
    console.log(`count : ${count}`);
    if(count === 5){
        clearInterval(time);
        console.log("interval stoped")
    }
},1000);

let sec = 10;

let timer = setInterval(()=>{
    console.log(sec);
    sec--;

    if (sec < 0) {
        clearInterval(timer);
        console.log("timmer stoped");
    }
},1000)

