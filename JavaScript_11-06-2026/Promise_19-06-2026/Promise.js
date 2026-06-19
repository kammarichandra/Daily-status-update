// promise 



let promise = new Promise((resolve , reject)=>{

    let success = true;

    if(success){
        
        console.log("operation completed successfully");
    }else{
        console.log("operation failed");
    }
});

// with delay

let fetchdata = new Promise((resolve , reject)=>{

    setTimeout(()=>{
        resolve("data fetched");
        console.log("data fetched..")
    },2000)
})


// consuming promise with then and catch

fetchdata.then((res)=>{
    console.log(res);
})
.catch(error=>{

    console.log(error);
})

// using then and catch 

function getdata(){
    return new Promise((resolve , reject)=>{
        let success1 = true;

        if (success1) {
            resolve({id:1,name:"chandra"});
        } else {
            reject("data faield");
        }
    });
}

getdata()
    .then(user =>{
        console.log("data :", user);
    })
    .catch(error =>{
        console.log("error :", error);
    });


    function data(){

        return new Promise((resolve,reject)=>{
            reject("network error");
        });
    }

    data()
    .then(user=>{
        console.log(user);
    })
    .catch(error=>{
        console.log("error :",error)
    });


    //using callback in promise

    function hai(callback){
        setTimeout(()=>{
            callback("data recived..")
        },2000)
    }

    hai((res)=>{
        console.log(res);
    });

    //callback error hadling 

    function data1(callback){
        let success2 = false;

        setTimeout(()=>{

            if(success2){
                callback("hi chandra");
            }else{
                callback("something went wrong..")
            }
        },1000)
    }

    data1((error,data)=>{

        if(error){
            console.log(error);
        }else{
            console.log(data)
        }

    })


    // promise types 

    // 1. promise all

    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("user api")
        }, 1000);
    });

    let p2 = new Promise((resolve, reject) => {

        setTimeout(() => {
            reject("posts api ")
        }, 2000);
    });

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() =>  {
            resolve("comments api")
        } , 1500);
    });


    Promise.all([p1, p2, p3]) 
        .then(res => {
            console.log("all settled");
            console.log(res);
        })
        .catch(error => {
            console.log("one failed");
            console.log(error);
        });

        //promise race

        Promise.race([p1,p2,p3])
        .then(res=>{
            console.log("winner :");
            console.log(res);
        })
        .then(error=>{
            // console.log("something went wrong")
            console.log("something went wrong");
        })


        //promise any 

        let p4 =  new Promise((resolve , reject)=>{

            setTimeout(() => {
                resolve("user api ")
            }, 1000);
        });

        let p5 =  new Promise((resolve , reject)=>{

            setTimeout(() => {
                reject("get api ")
            }, 1000);
        });

        let p6 =  new Promise((resolve , reject)=>{

            setTimeout(() => {
                resolve("post api ")
            }, 1000);
        });

        
        Promise.any([p4,p5,p6])
        .then(res=>{
            console.log("success")
            console.log(res);
        })
        .catch(error=>{
            console.log(error)
        });