// Promises

// A Promise represents a task that will finish in the future.

// A Promise has 3 states:

// Pending   → task is running
// Fulfilled → task successful
// Rejected  → task failed

let promise  = new Promise((resolve , rejected)=>{

    let success = true;

    if(success){
        resolve("verification done")
    }
    else{
        rejected("better luck next time..")
    }
})

console.log(promise);


// checking age

let age = new Promise((resolve,Reject)=>{
    let age1 = 8;

    if(age1>=18){
        resolve("eligible for vote")
    }else{
        Reject("not eligible for vote")
    }
})
console.log(age);

// .then()
// .then() is used when the Promise is successful.
// syntax : 
// .then((res)=>{
//  })

const promise1 = new Promise((resolve, reject) => {
  resolve(" successful");
});

promise1.then((result) => {
  console.log(result);
});

let login =  new Promise((resolve,reject)=>{
    resolve("login successfull..")
})

login.then((msg)=>{
    console.log(msg);
});

// .catch()
// .catch() handles a rejected Promise / error.

let catch1 = new Promise((resolve,reject)=>{
    reject("something went wrong..");
}) 
catch1.catch((error)=>{
    console.log(error);
})

// payment 
let payment = new Promise((resolve,reject)=>{
    let success = false;

    if(success){
        console.log("payment done....")
    }else{
        console.log("something went wrong try again !")
    }
})
payment.then((msg)=>{
    console.log(msg)
}).catch((error)=>{
    console.log(error);
});

// .finally()
// .finally() runs whether the Promise succeeds or fails.
//  It is commonly used for cleanup or stopping a loader.

const promise2 = new Promise((resolve, reject) => {
  resolve("Success");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Task completed");
  });

// Promise.all()
// Promise.all() runs multiple Promises together and waits for all of them to succeed.

let p1 = Promise.resolve("User loaded");
let p2 = Promise.resolve("Products loaded");
let p3 = Promise.resolve("Orders loaded");

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

let user = Promise.resolve("user");
let products = Promise.resolve("products");
let orders = Promise.resolve("orders");

Promise.all([user,products,orders])
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error);
  })

// Promise.race()
// Promise.race() returns the result of the first Promise that finishes.
// It can be either successful or rejected.

let pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first")
    },5000);
}) ;

let pro1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second")
    },3000)
})

Promise.race([pro,pro1])
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        console.log(error);
    })

// Promise.allSettled()
// Promise.allSettled() waits for all Promises, whether they succeed or fail.

const p11 = Promise.resolve("Success");
const p22 = Promise.reject("Failed");
const p33 = Promise.resolve("Success");

Promise.allSettled([p11, p22, p33])
  .then((results) => {
    console.log(results);
  });

// Promise.any()
// Promise.any() returns the first successfully fulfilled Promise.

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("welcome")
    }, 3000);
})

let promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("take care")
    }, 2000);
})

Promise.any([promise3,promise4])
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        console.log(error);
    })


// Async/Await
// async/await is a cleaner way to work with Promises.
// Basic syntax : 
// async function getData() {
//   const result = await promise;
//   console.log(result);
// }

let data = Promise.resolve("data recived..");

async function getdata() {
    
    let res = await data;
    console.log(res);
}
getdata();

let login1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("login successfull...")
    },2000)
});

async function userlogin() {
    
    let result = await login1

    console.log(result);
}
userlogin();


// Error Handling
// Errors in asynchronous JavaScript can be handled using:
// try {
//   // code
// } catch (error) {
//   // error handling
// } finally {
//   // always runs
// }

async function getData() {

  try {
    
    const result = await Promise.reject("Server error");

    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Request completed");
  }
}

getData();