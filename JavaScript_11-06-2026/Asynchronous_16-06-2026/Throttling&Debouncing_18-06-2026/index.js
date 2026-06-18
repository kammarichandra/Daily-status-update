
//normal event 

let input = document.getElementById("input");

input.addEventListener("input",(e)=>{
    console.log(e.target.value);
})


//debouncing 

function debounce (fun,delay){

    let timer ;

    return(...args)=>{
        clearTimeout(timer);

        timer = setTimeout(()=>{
            
            fun(...args);
        },delay)
    };
}

let input1 = document.getElementById("input1");

input1.addEventListener("input",debounce((e)=>{
    console.log(e.target.value);
},500)
);

//throttled 

function throttled(fun , delay){

    let lastcall = 0;

    return (e)=>{

     let now = Date.now();

     if(now - lastcall >=delay){
        lastcall = now;

        fun(e)
     }
    };
}

let input2 = document.getElementById("input2");

input2.addEventListener("input",debounce((e1)=>{
    console.log(e1.target.value);
},500)
);