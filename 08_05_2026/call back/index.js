//call back

function great(name,callback){

    console.log("hello "+name);
    callback();
}

function bye(){
    console.log("good byee")
}

great("chandra ",bye)

//promise

let promise = new Promise(function ( resolve , reject){
    let succees = true;

    if(succees){
        resolve("data lodaded successfully")
    }else{
        reject("error lodded data")
    }
});

promise.then(function(result){
    console.log(result)
}).catch(function(error){
    console.log(error);
})