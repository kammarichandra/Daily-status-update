//promise.all

let p1 = Promise.resolve("apple");
let p2 = Promise.resolve("banana");
let p3 = Promise.resolve("cherry");

Promise.all([p1,p2,p3])
.then(res=>{
    console.log(res)
}
)
.catch(error =>{
    console.log(error)
})

let p4 = Promise.resolve("apple");
let p5 = Promise.reject("banana");
let p6 = Promise.resolve("cherry");

Promise.all([p4,p5,p6])
.then(res=>{
    console.log(res)
}
)
.catch(error =>{
    console.log(error)
})

//promise.race
// returns the first primise to settel fulfilled or rejected


let fast = new Promise(resolve=>{
    setTimeout(()=>{
        console.log("fast response")
    },1000)
});

let slow = new Promise(resolve=>{
    setTimeout(()=>{
        console.log("slow response")
    },3000)
});

Promise.race([fast,slow])
.then(res=>{
    console.log(res);
})

//rejection

let reject = new Promise((_,reject)=>{

    setTimeout(()=>{
        reject("promise failed..");
    },500)
});

let resolve = new Promise(resolve =>{
    setTimeout(()=>{
        resolve("success later")
    },3000);
});

Promise.race([reject,resolve])
.then(res=>{
    console.log(res)
})
.catch(error=>{
    console.log(error);
})

//promise.allsetteled
// watis for all promise to settle

let p7 = Promise.resolve("data loaded");
let p8 = Promise.resolve("network loaded");
let p9 = Promise.resolve("profile loaded");

Promise.allSettled([p7,p8,p9])
.then(result =>{
    console.log(result);
})


//promise.any
//

let p = Promise.reject("server 1 failed");

let pro = new Promise(resolve=>{
    setTimeout(()=>{
        resolve("server 2 responded")
    },2000);
})

let pro1 = new Promise(resolve=>{
    setTimeout(()=>{
        resolve("server 3 responded")
    },4000);
})


Promise.any([p,pro,pro1])
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})


//when all promises rejected 

Promise.any([
    Promise.reject("error 1"),
    Promise.reject("error 2"),
    Promise.reject("error 3")

])

.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
}) 

