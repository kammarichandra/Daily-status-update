
// normal event 

let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    alert("button clicked successfully");
    console.log("button clicked successfully")
});

//trottling 

let btn1 = document.getElementById("btn1")

function throttle(func,delay){
    let lastcall = 0;

    return function (){
        let now = new Date().getTime();

        if(now - lastcall >= delay){
            lastcall  = now;
            func()
        }
    };
}

function showmessage(){
    console.log("button clicked")
}

btn1.addEventListener("click",throttle(showmessage,2000));


// debouncing 

let input  = document.getElementById("serch");

function debounce(func , delay){

    let timer;

    return function(){
        clearTimeout(timer);

        timer = setTimeout(()=>{
            func();

        },delay);
    }
}

function serchdata(){
    console.log(" serching data...")
}

serch.addEventListener("keyup",debounce(serchdata,1000))