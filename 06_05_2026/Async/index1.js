//set time
console.log("start");

setTimeout(function(){
    console.log("this will run after 5 sec")
},5000);

console.log("end");

//set interval
let count = 1;

setInterval(function(){
    console.log("count",count)
    count++;
},6000);


//clear interval

let count1 = 1;
let timer = setInterval(function(){
    console.log("running",count1 );
    count1++;

    if(count1 >5){
        clearInterval(timer);

        console.log("interval completed ")
    }
},2000);

