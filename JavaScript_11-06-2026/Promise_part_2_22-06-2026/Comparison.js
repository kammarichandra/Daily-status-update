// promise.all

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("p1 success")
        resolve("p1 result")
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("p2 success")
        resolve("p2 result")
    },2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("p3 success")
        resolve("p3 result")
    },3000)
})


//peomise.all


Promise.all([p1,p2,p3])
.then(result=>{
    console.log("all :",result)
})
.catch(error=>{
    console.log(error)
});


//promise.allselected


Promise.allSettled([p1,p2,p3])
.then(result=>{
    console.log("all settled :",result);
})

//promise.race

Promise.race([p1,p2,p3])
.then(result=>{
    console.log("race :",result);
})
.catch(error=>{
    console.log(error)
});

//promise.any

Promise.any([p1,p2,p3])

.then(result=>{

    console.log(result);
})

.catch(error=>{
    console.log(error)
})

