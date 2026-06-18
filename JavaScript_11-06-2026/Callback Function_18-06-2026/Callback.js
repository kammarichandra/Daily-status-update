function call(name,callback){

    console.log("heloo candra" + name);
    callback();
}

function bye(){
    console.log("goodbye !");
}

call(" sekhar",bye);


// calculator 

function calculator( a , b , operation){

    return operation(a,b)
    
}

function add(x,y){
    return x+y;
}

function multiply(x1,y1){
    return x1*y1;
}

console.log(calculator(10,50,add));
console.log(calculator(20,45,multiply));

//fetching data

function data(hai){
    console.log("fetching data...");

    setTimeout(()=>{
        let user = {
            id   : 1,
            name : "chandra"
        };

        hai(user);
    },2000)
}

data((user1)=>{
    console.log("recevied :" , user1)
})


function click(callback){
    let btn = document.getElementById("btn");

    btn.addEventListener("click",callback);
};

click(()=>{
    console.log("button clicked")
})