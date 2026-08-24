// without parameter

(function (){
    console.log("hello chandra sekhar")
})()

// with parameter 

(function (name){

    console.log("welcome" + name);

})("rahul")

// calculation

let res = (function (num){
    return num*2
})(20);
console.log(res);