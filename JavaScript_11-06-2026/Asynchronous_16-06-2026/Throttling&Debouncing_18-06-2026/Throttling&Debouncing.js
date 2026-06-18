
// debouncing 

function debouncing(fun,delay){

    let timeout;

    return function(...args){

        clearTimeout(timeout);

        timeout = setTimeout(()=>{

            fun.apply(this , args);

        },delay)
    };
}

function serch(query){

    console.log("serching for :" , query)
}


let searchInput  = document.getElementById("serch");

searchInput.addEventListener("input", debouncing((event) => {
    serch(event.target.value);
}, 500));


// throttling 

function throttling(call,delay){
    let lastcall = 0;

    return function(...args){

        let now = Date.now();

        if(now - lastcall >= delay){
            lastcall = now;

            call(...args);
        }
    };
}

function updatescroll(){
    let statusText = document.getElementById("scroll-status");

    statusText.textContent = "scroll position : " + window.scrollY;

    console.log("updated :", window.scrollY);
}

window.addEventListener("scroll", throttling(updatescroll, 1000));